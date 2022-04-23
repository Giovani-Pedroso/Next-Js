
import Link from 'next/link';

//quando oque esta na tag link nao e uma tag a
// deve-se passar o patametor passHref

export default function PostList({posts}){
    return(
        <>
          <h1>List of Post</h1>
          {
              posts.map(post=>{
                  return(
                      <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                          <h2>{post.id} {post.title}</h2>
                        </Link>
                          <hr />
                      </div>
                  );
              })
          }
        </>
    );
}


export async function getStaticProps(){

    console.log("oiiiii");
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props:{
            posts: data
        }
    };
}
