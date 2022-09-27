import { backEnd } from '../host';

async function getAuctionsUserWon() {
  const fetchResponse = await fetch(`${backEnd}/getAuctionsUserWon`, {
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

export { getAuctionsUserWon };
