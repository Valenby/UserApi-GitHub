export const ApiGitHub = async(user) => {

  let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
   try {
      const result= await fetch(`https://api.github.com/users/${user}`, requestOptions)
      const jsonResponse = await result.json();
      console.log(jsonResponse)
      return jsonResponse;
      
      } catch (error) {
          console.log(error, 'error')
  }
    
   
  
  }