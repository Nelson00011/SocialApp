//TODO
import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetails from "@/components/meetups/MeetupDetails";

function MeetupDetail(props){
//TODO pull data from Dummy before API & eliminate place holders.
    return (<MeetupDetails 
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description} 
        />
    );
}

export async function getStaticPaths(){
//fx'l
    const uri = "mongodb+srv://luluBlue:75qf7vXP25tOMA8G@cluster0.aoag1gt.mongodb.net/socialapp?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection('socialapp');

    const meetupsAll = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close()
    //fallback false means all things are covered. 
    
    return {
        fallback: false,
        paths: meetupsAll.map((social)=> ({ 
        params: { meetupId: social._id.toString() },
        })),
    };
}


export async function getStaticProps(context){
    //TODO fetch with API, required for Next.js load fx, must have ObjectId for findOne
    const meetupId = context.params.meetupId;
       
    const uri = "mongodb+srv://luluBlue:75qf7vXP25tOMA8G@cluster0.aoag1gt.mongodb.net/socialapp?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection('socialapp');

    const selectedMeetup = await meetupsCollection.findOne({ 
        _id: ObjectId(meetupId),
     });
  
    client.close()

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        },
    };
}

export default MeetupDetail;

