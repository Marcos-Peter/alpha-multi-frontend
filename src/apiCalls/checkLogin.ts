import { backEnd } from './host';

async function checkLogin() {
  const fetchResponse = await fetch(`${backEnd}/checkLogin`, {
    method: 'GET',
    credentials: 'include',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  const responseJson = await fetchResponse.json();

  return responseJson;
}

export { checkLogin };
