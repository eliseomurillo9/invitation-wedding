
const url = "https://sheetdb.io/api/v1/j4hph8bw86dni";
const token = "Bearer smzk707gex7rfst8qm53jf42ethsrf2ry4d7xh5r";

const getEmails = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: token,
      },
    });
    if (!response.ok) {
      return undefined;
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
             return 'base.error.noAvailable'
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
      return {
             response: 'base.error.emailRegisted'
           };
        // return 'The email is alredy registed'
    }
 
};

export { getEmails, registerEmail };