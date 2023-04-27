import { MongoClient } from "mongodb";

import MeetupList from "@/components/meetups/MeetupList";

function HomePage(props){
return (
    <MeetupList meetups={props.meetups} />
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
    //TODO fetch with API
    const uri = "mongodb+srv://luluBlue:75qf7vXP25tOMA8G@cluster0.aoag1gt.mongodb.net/socialapp?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = client.db();
    const meetupsCollection = db.collection('socialapp');

    const meetupsAll = await meetupsCollection.find().toArray();
    //close always
    client.close();


    
    return {
        props: {
            meetups: meetupsAll.map((c)=> ({
                title: c.title,
                address: c.address,
                image: c.image,
                id: c.toString(),
            }))
        },
        revalidate: 10,
    };
}

export default HomePage; 


