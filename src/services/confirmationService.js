// require('dotenv').config()

export default async function attendeeConfirmation({
  modality,
  email,
  firstname,
  lastname,
}) {
  const url = process.env.VUE_APP_FUNCTION_URL
  const data = new URLSearchParams()
  
  data.append('modality', modality)
  if (modality === 'online') {
    data.append('email', email)
  } else {
    data.append('name', firstname);
    data.append('lastname', lastname)
  }
    try {
      const addAttendeeToList = await fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
        body: data,
      })
    
      return addAttendeeToList
    } catch (error) {
      console.log(error);
    }
  
}
