import React from 'react';

import User from '../components/user.js';
// vc tambem pode desestruturar a
// requisiçãp
export default function Users(props){



    return(

        <>
          <h1>Lista de aaaaaa usuarios</h1>
          {
              props.users.map(user=>{
                  return(
                      <div key={user.id}>
                        <User user={user}/>
                      </div>
                  );
              })
          
          }
        </>
    );

}

//Essa estrutura é usado quando se necessita
//fazer uma requisição a uma API ou banco de dados
//apenas roda no server, e nao sera adicionado nos arquivos
//enviados para o cliente.
//So pose ser rodado em paginas, não funcionara em componentes.
export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    //essa estrutura é necessaria para passar os
    //dados da requisição para o componente
    return{
        props:{
            users:data
        }
    };
    
}
