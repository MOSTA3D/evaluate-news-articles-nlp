    const isValidUrl = tempUrl => {
        let url;
        try{
            url = new URL(tempUrl);
        } catch(err){
            return false;
        }
        return (url.protocol === "http:" || url.protocol==="https:");
    }

export default isValidUrl;