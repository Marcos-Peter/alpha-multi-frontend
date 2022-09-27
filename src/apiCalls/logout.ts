import { backEnd } from './host';

async function logout() {
  const fetchResponse = await fetch(`${backEnd}/logout`, {
    method: 'GET',
    credentials: 'include',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  });

  const responseJson = await fetchResponse.json();

  return responseJson;
}

export { logout };
