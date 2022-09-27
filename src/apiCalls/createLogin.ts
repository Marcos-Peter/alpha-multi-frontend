import { backEnd } from './host';

async function createLogin(username: string, password: string) {
  const body = {
    username,
    password,
  };

  const fetchResponse = await fetch(`${backEnd}/createLogin`, {
    method: 'POST',
    credentials: 'include',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const responseJson = await fetchResponse.json();

  return responseJson;
}

export { createLogin };
