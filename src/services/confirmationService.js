// require('dotenv').config()

export default async function attendeeConfirmation({
  modality,
  email,
  firstname,
  lastname,
}) {
  const url = process.env.VUE_APP_FUNCTION_URL
  const data = new URLSearchParams()
  if (modality === 'online') {
    data.append('email', email)
  } else {
    data.append('name', firstname);
    data.append('lastname', lastname)
  }
  
  const addAttendeeToList = await fetch(url, {
    method: 'POST',
    body: data,
  })

  const response = await addAttendeeToList.json();
  console.log(response);
}
