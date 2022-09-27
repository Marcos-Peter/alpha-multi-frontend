import { backEnd } from '../host';

async function getAuctionData(name: string) {
  const fetchResponse = await fetch(`${backEnd}/getAuctionData/${name}`, {
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

export { getAuctionData };
