// solicitud a la api y almacenar datos de la respuesta en el estado


export const ApiGitHub = async(user) => {


var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  

 try {
    const result= await fetch(`https://api.github.com/users/${user}`, requestOptions)
    const jsonResponse = await result.json();
    // console.log(jsonResponse)
    return jsonResponse;
    
    } catch (error) {
        console.log(error, 'error')
}
  
 

}
  

