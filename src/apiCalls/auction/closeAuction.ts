async function isAuctionClosed(name: string) {
  const fetchResponse = await fetch(
    `http://localhost:8000/closeAuction/${name}`,
    {
      method: 'PUT',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );

  const responseJson = await fetchResponse.json();

  return responseJson;
}

export { isAuctionClosed };
