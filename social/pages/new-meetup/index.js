// our-domain.com/new-meetup


import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  

  async function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData)
    //TODO: fetch  data input okay
    const url = '/api/new-meetup'
    const response = await fetch (url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(enteredMeetupData)    
    });
    ///TODO Issues with fetch sattement->new-meetup API, but Status 500
    console.log("index.js - RESPONSE")
    console.log(response)
    const data = await response.json();
    //TODO data output
    console.log("index.js - data")
    console.log(data);

  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;