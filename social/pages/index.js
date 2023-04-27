import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from "mongodb";

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props){
return (
    <Fragment>
    <Head>
      <title>Social App</title>
        <meta name='description' content="Navigation Social Event & update to user profile vs browsing capabilities" > 
      </meta>
    </Head>
    <MeetupList meetups={props.meetups} />
    </Fragment>
);
}

//Option 1 serverside props
// export async function getServerSideProps(context){
// //fetch API for server side only
// const req = context.req;
// const res = context.res;

// return {
//     props: {
//         meetups: DUMMY_MEETUPS,
//     },
// };
// }


//Option 2 static props
export async function getStaticProps(){
    //COMMENT: Fetch with mongoDB API & fx'l
    const uri = "mongodb+srv://luluBlue:75qf7vXP25tOMA8G@cluster0.aoag1gt.mongodb.net/socialapp?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection('socialapp');

    const meetupsAll = await meetupsCollection.find().toArray();
    //COMMENT: close always
  
    client.close();

    return {
      props: {
        meetups: meetupsAll.map((c) => ({
          title: c.title,
          address: c.address,
          image: c.image,
          id: c._id.toString(),
        })),
      },
      revalidate: 1,
    };
}

export default HomePage; 


