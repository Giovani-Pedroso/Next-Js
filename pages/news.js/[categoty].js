//import { createPortal } from "react-dom/cjs/react-dom.production.min"
//import { getServerSideProps } from "."

export default function Category({articles,category}){

    return(

        <>
        <h1>{category}</h1>
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

    )
}

export async function getServerSideProps(context){
    const {params} = context;
    const {category} = params;

    const response = await fetch(`http://localhost:4444/articles?category=${category}`);
    const data = await response.json();

    return {

        props:{
            articles:data, 
            category
        }
    }

}