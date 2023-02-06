//realizar peticion http api
// export const GitHubFetchUser = async(category)=>{

//     const url = `https://api.github.com/users/`;
//     const resp = await fetch(url);
//     const {data} = await resp.json();

//     const gifs = data.map( img =>({
//         id: img.id,
//         title: img.title,
//         url: img.images.downsized_medium.url

//     }))
    
//     return gifs;
// }