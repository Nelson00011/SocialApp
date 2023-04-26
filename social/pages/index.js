import MeetupList from "@/components/meetups/MeetupList";


const DUMMY_MEETUPS = [
    {
        id : 'm1',
        title: "A First Meeting",
        image: "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/best-beaches-in-bali-1518082410-785X440.jpg",
        address: "132 Drive, Beach City.",
        description: "This is one!"
    },
    {
        id : 'm2',
        title: "A First Meeting",
        image: "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/best-beaches-in-bali-1518082410-785X440.jpg",
        address: "132 Drive, Beach City.",
        description: "This is one!"
    }
];


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
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 10,
    };
}

export default HomePage; 


