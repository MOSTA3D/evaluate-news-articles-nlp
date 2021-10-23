export default async function postData(url="", data={}){
    const response = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    try{
        const newData = await response.json();
        return newData;
    } catch(err){
        console.error(err);
    }
}

// const isValidUrl = tempUrl => {
//     let url;
//     try{
//         url = new URL(tempUrl);
//     } catch(err){
//         return false;
//     }
//     return (url.protocol === "http:" || url.protocol==="https:");
// }
