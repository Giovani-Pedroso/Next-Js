
import React from 'react';
export default function PostList({posts}){
    return(
        <>
          <h1>List of Post</h1>
          {
              posts.map(post=>{
                  return(
                      <div key={post.id}>
                        <h2>{post.id} {post.title}</h2>
                        <hr />
                      </div>
                  );
              })
          }
        </>
    );
}


export async function getStaticProps(){
    const response = await fetch('http://jsonplaceholder.typicode.com/posts');
    const date = await response.json();

    return {
        props:{
            posts: data.slice(0,3)
        }
    };
}
