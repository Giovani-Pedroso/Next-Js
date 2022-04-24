import { useState, useEffect } from "react";

export default function Dashboard(){

    const [dashboardData, setDashboardData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //this is called CSR- client side render, you must use this
    //to pages that will not need SEO and is particular to the user
    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('http://localhost:4444/dashboard');
            const data = await response.json();
            setIsLoading(false);
            setDashboardData(data);
            
        }
        fetchData();
    },[]);

    if(isLoading){
        return <h1>Loading....</h1>
    }

    return(
        <>
            <h3>Likes: {dashboardData.likes}</h3>
            <h3>Comments: {dashboardData.comments}</h3>
            <h3>Following: {dashboardData.following}</h3>
            <h3>Followers: {dashboardData.followers}</h3>
        </>

    );
}