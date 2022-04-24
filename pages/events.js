import {useState} from 'react';
import {useRouter} from 'next/router';

export default function EventListener({eventList}){

    const [events, setEvents] = useState(eventList);
    const router = useRouter();

    const fetchTechEvents = async () =>{

        const response = await fetch(`http://localhost:4444/events?category=tech`);
        const data = await response.json();
        console.log("button",data);
        setEvents(data);
        router.push('events?category=tech', undefined, {shallow:true})
    }

    return(
        <>
            <button onClick={fetchTechEvents}>Tech Events</button>
            <h1>List of events</h1>
            {
                events.map(event =>{
                  
                  return(
                  <div key={event.id}>
                        <h2>{event.name}</h2>
                        <h2>{event.category} | {event.date}</h2>
                        <hr />
                    </div>
                  )
                })
            }
        </>

    );
}

export async function getServerSideProps(context){

    const {query} = context;
    const {category} = query;
    const queryString = category ? 'category=tech' : '';

    const response = await fetch(`http://localhost:4444/events?${queryString}`);
    const data = await response.json();

    return{
        props:{
            eventList:data
        }
    }
}