
const url = process.env.SHEET_API_URL;
const token = process.env.SHEET_API_KEY;

const getEmails = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: token,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};


const registerEmail = async (arg) => {
  const emailInput = arg;
  const data = new URLSearchParams();
    data.append("email", emailInput);
    
    const emailList = await getEmails();
    console.log(emailList);
    const isTheMailInList = emailList.find(emailFromList => emailFromList.email === emailInput);
    if (!isTheMailInList) {
         try {
           const response = await fetch(url, {
             method: "POST",
             headers: {
               Authorization: token,
             },
             body: data,
           });
           if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
           }
           const dataParsed = await response.json();
           return {
             status: response.status,
             response: dataParsed,
           };
         } catch (error) {
           if (error instanceof SyntaxError) {
             throw new Error(error);
           } else {
             throw new Error(error);
           }
         }
    } else {
        console.log("The email is alredy registed");
        return 'The email is alredy registed'
    }
 
};

export { getEmails, registerEmail };