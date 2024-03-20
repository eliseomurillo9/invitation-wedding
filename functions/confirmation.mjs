require('dotenv').config()
import { parse } from 'querystring'

const url = process.env.URL_SHEET
const token = process.env.SHEETSDB_KEY
const attendanceMethodes = {
  ONLINE: 'online',
  PRESENTIAL: 'presential',
}

const getAttendeesList = async (method) => {
  try {
    const attendees = (
      await fetch(`${url}?sheet=${method}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    ).json()

    return attendees
  } catch (e) {
    throw new Error(e)
  }
}

export async function handler(event) {
  const decodeBody = parse(event.body)
  const attendanceMethod = decodeBody.modality
  const attendeeInformation =
  decodeBody?.email ||
    `${decodeBody.name} ${decodeBody.lastname}`

  const data = new URLSearchParams()
  if (attendanceMethod === attendanceMethodes.ONLINE) {
    data.append('email', attendeeInformation)
  } else {
    data.append('name', attendeeInformation)
  }
  const attendeesList = await getAttendeesList(attendanceMethod)
  const isTheMailInList = attendeesList?.find(
    (emailFromList) => emailFromList.email === attendeeInformation,
  )

  if (!isTheMailInList) {
    const addToList = await fetch(`${url}?sheet=${attendanceMethod}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })

    if (!addToList.ok) {
      return {
        statusCode: addToList.status,
        body: JSON.stringify(addToList.statusText),
      }
    }

    const response = await addToList.json()

    return {
      statusCode: addToList.status,
      body: JSON.stringify(response),
    }
  } else {
    return {
      statusCode: 409
    }
  }
}
