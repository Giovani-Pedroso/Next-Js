export default function Post({post}){

    console.log(post);

    
    
    return (
        <>
          <h2>{post.id} {post.title}</h2>
          <p>{post.body}</p>
        </>
    );
}



//To create A static page with dinamoc routes we nedd to use
//this function, it will return an object with the the possibles params,
//we need do this because this is a static page this mean that all pages
//will be pre biuld and how we are using a dinamic page the next does not know
//if he must bild 1, 2 or 100000000 pages o avoid this we define the pages here
export async function getStaticPaths(){

    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    //dinamic solution
    const paths = data.map(post =>{
        return{
            params:{
                postId:`${post.id}`
            }
        };
    }
    );

    return{
        //because the name of the is the same as the patametor
        //the can only write once
        paths,
        /*
          This was the hard coded solution
        paths:[
            {params:{postId:'1'}},
            {params:{postId:'2'}},
            {params:{postId:'3'}},
        ],
        */

        //the fallback key is mandatory, it can be 3 values, false, true,
        //'blocking'. Whent false the pages will be generated at build time be
        //the function getstaticpaths, if the paths does not exist the site will
        // throw an error 404, use false if you have a small numbre of pages,
        // and the adicion of pages are not frequenty

        //Fallback true, as with the false config the pages will be render
        // at build time, but if the pages does not exist, instead of a page
        //404 the next will create an fallback version of the first page, and it
        //will create the page

        //Fallback 'blocking', it is similar to true the only differenc is,
        //it does on generat a loading page

        //Problems with static generations
        //1 the build time is proportional to the numbrer of pages
        //2 the data only uodate went you bild the site


        //ISR- incremental static Regenaraion.
        //allow you update the built pages, look to the getStaticProps
        //for more info
        fallback: false,
    };

}



export async function getStaticProps(context){
    //Take the data from the url
    const {params} = context;
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    return({
        props:{
            post:data
        },
        //first add the revatidate key to the return
        //this key recive the numbre of seconds for the page be update
        //in this case the page will update each 600 seconds,
        //Note: after that time you need reload the page to rebuild,
        //And reload again to see the changes
       
        revalidate:600,
    });
}
