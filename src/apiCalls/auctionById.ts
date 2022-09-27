import { backEnd } from './host';

async function auctionById(id: string) {
  const fetchResponse = await fetch(`${backEnd}/getAuction/${id}`, {
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
