export default function User({user}){

    return(
        <>
          <hr/>
          <p>Nome: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
    );
}
