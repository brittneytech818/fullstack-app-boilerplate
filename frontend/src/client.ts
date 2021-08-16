const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getFirstUser() {
  const response = await fetch(`${BACKEND_URL}users/first`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error('An error occurred while fetching data from the backend');
  }

  return data;
}
