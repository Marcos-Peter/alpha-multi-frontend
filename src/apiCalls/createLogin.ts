async function createLogin(username: string, password: string) {
  const body = {
    username,
    password,
  };

  const fetchResponse = await fetch('http://localhost:3000/createLogin', {
    method: 'POST',
    credentials: 'include',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const responseJson = await fetchResponse.json();

  return responseJson;
}

export { createLogin };
