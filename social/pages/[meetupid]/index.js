//TODO

import MeetupDetails from "@/components/meetups/MeetupDetails";

function MeetupDetail(props){
//TODO pull data from Dummy before API & eliminate place holders.
    return (<MeetupDetails image={props.image}
        title={props.title}
        address={props.address}
        description={props.description} />);
}

export async function getStaticPaths(){
//TODO fetch option via API
//fallback false means all things are covered. 
    return{
        fallback: true,
        paths: [
            {params: {
            meetupId: 'm1',
            },
        },
            {params: {
                meetupId: 'm2',
                },
            },
        ],
    };
}

export async function getStaticProps(context){
    //TODO fetch with API
    const meetupId = context.params.meetupId;
    console.log(meetupId)

    return {
        props: {
            meetupData:{
                image: "https://blog.hubspot.de/hubfs/Germany/Blog_images/smart-bidding.png",
                id: meetupId,
                title: "First Title",
                address: "123 Beach San Francisco, CA",
    
            } 
        },
    };
}

export default MeetupDetail;

