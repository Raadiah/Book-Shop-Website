const apiCall = async (url)=>{
    const dataJson = await fetch(url);
    const dataObj = await dataJson.json();

    console.log(dataObj);

    return dataObj;
}

export default apiCall