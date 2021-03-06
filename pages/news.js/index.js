export default function News({articles}){
    return(
        <>
            <h1>List of articles</h1>
            {
                articles.map(article =>{
                    return(
                        <div key={article.id}>
                            <h2>{article.title}</h2>
                            <p>{article.category}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </>

    );

}


//spacial function on next js to use the server side
//render config, this function only run on the server side
//this mean that this code won't be send to the user also means
//that you can use nodejs code
export async function getServerSideProps(){    
    const response = await fetch('http://localhost:4444/articles/');
    const data = await response.json();

    return{

        props:{
            articles: data
        }
    }
}

