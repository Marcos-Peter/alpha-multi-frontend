async function auctionById(id: string) {
    const fetchResponse = await fetch(`http://localhost:8000/getAuction/${id}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  
    const responseJson = await fetchResponse.json();
  
    return responseJson;
  }
  
  export { auctionById };
  