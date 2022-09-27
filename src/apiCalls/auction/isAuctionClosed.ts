import { backEnd } from '../host';

async function isAuctionClosed(name: string) {
  const fetchResponse = await fetch(`${backEnd}/isAuctionClosed/${name}`, {
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

export { isAuctionClosed };
