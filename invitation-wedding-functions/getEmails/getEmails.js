// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const url = process.env.SHEET_API_URL;
const token = process.env.SHEET_API_KEY;

const handler = async () => {
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


module.exports = { handler };
