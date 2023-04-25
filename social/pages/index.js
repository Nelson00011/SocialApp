import MeetupList from "@/components/meetups/MeetupList";



const DUMMY_MEETUPS = [
    {
        id : 'mi',
        title: "A First Meeting",
        image: "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/best-beaches-in-bali-1518082410-785X440.jpg",
        address: "132 Drive, Beach City.",
        description: "This is one!"
    },
    {
        id : 'mi',
        title: "A First Meeting",
        image: "https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/best-beaches-in-bali-1518082410-785X440.jpg",
        address: "132 Drive, Beach City.",
        description: "This is one!"
    }
];


function HomePage(){
return (
    <MeetupList meetups={DUMMY_MEETUPS} />
);
}

export default HomePage; 