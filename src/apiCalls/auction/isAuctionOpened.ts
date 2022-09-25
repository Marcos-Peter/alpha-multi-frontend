async function isAuctionOpened(name: string) {
  const fetchResponse = await fetch(
    `http://localhost:8000/isAuctionOpened/${name}`,
    {
      method: 'GET',
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

export { isAuctionOpened };
