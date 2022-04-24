import useSwr from 'swr';

const fetcher = async ()=>{

        const response = await fetch('http://localhost:4444/dashboard');
        const data = await response.json();
        return data;
    }    

//SWR is a hook lib for fetchind data 
export default function Dashboard(){

    //the function return two thing, the fetched data
    //and a error message
    const {data, err} =  useSwr('dashboard',// An unique key for the request
                        fetcher// the function of the fetching the 
                                //consensi is use in this format
    );

    if(err) return <h1>An error happened</h1>;
    if(!data)return "Loading";

    return(
        <>
            <h3>Likes:     {data.likes}</h3>
            <h3>Comments:  {data.comments}</h3>
            <h3>Following: {data.following}</h3>
            <h3>Followers: {data.followers}</h3>
        </>

    );
}