async function changePassword(
  userName: string,
  currentPassword: string,
  newPassword: string,
) {
  const body = {
    userName,
    currentPassword,
    newPassword,
  };

  const fetchResponse = await fetch('http://localhost:8000/changePassword', {
    method: 'POST',
    credentials: 'include',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const responseJson = await fetchResponse.json();

  return responseJson;
}

export { changePassword };
