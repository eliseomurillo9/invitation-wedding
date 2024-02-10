require('dotenv').config()

const url = process.env.URL_SHEET
const token = process.env.SHEETSDB_KEY
const attendanceMethodes = {
  ONLINE: 'online',
  PRESENTIAL: 'presential',
}

const getAttendeesList = async (method) => {
  const attendees = (
    await fetch(`${url}?sheet=${method}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  ).json()

  return attendees
}

export async function handler(event, context) {
  const attendanceMethod = event.queryStringParameters.method
  const attendeeInformation =
    event.queryStringParameters?.email ||
    `${event.queryStringParameters?.name} ${event.queryStringParameters?.lastName}`
  console.log(attendanceMethod)

  const data = new URLSearchParams()
  if (attendanceMethod === attendanceMethodes.ONLINE) {
    data.append('email', attendeeInformation)
  } else {
    data.append('name', attendeeInformation)
  }

  const getInvitationList = await getAttendeesList(attendanceMethod)

  const isTheMailInList = getInvitationList.find(
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

    const response = await addToList.json();
    console.log(response);

    return {
      statusCode: addToList.status,
      body: JSON.stringify(response),
    }

    //   }
    // }
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify('base.error.emailRegisted'),
    }
  }
  // return 'The email is alredy registed'
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ getInvitationList }),
  // }
}
