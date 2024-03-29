//TODO:
import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails(props){
//COMMENT: fx'l
    return (  
      <Fragment>
        <Head>
          <title>{props.meetupData.title}</title>
          <meta name='description' content={props.meetupData.description} />
        </Head>
      <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
    </Fragment>
    );
}


export async function getStaticPaths(){
//COMMENT: fx'l
    const uri = "mongodb+srv://luluBlue:75qf7vXP25tOMA8G@cluster0.aoag1gt.mongodb.net/socialapp?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection('socialapp');

    const meetupsAll = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();
  
    //COMMENT: fallback:'blocking' prevents page loading till HTML generated 
    return {
      fallback: 'blocking',
      paths: meetupsAll.map((meetup) => ({
        params: { meetupId: meetup._id.toString() },
      })),
    };
}


export async function getStaticProps(context){
    //TODO fetch with API, required for Next.js load fx, must have ObjectId for findOne
    const meetupId = context.params.meetupId;
    console.log(`meetupId info ${meetupId}`)  

    const uri = "mongodb+srv://luluBlue:75qf7vXP25tOMA8G@cluster0.aoag1gt.mongodb.net/socialapp?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection('socialapp');
    
    const meetupID = new ObjectId(meetupId)
    const selectedMeetup = await meetupsCollection.findOne({
      _id: meetupID,
    });
  
    client.close();
   
    
    //TODO: Coordinates, Google MAPs API location
    return {
        props: {
          meetupData: {
            image: selectedMeetup.image,
            id: selectedMeetup._id.toString(),
            title: selectedMeetup.title, 
            address: selectedMeetup.address,
            description: selectedMeetup.description,
          },
        },
    };
}

export default MeetupDetails;