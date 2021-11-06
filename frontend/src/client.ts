const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const client = {
  async fetch(
    relativeURL: string,
    {
      method = 'GET',
      data,
      expectedStatus = method === 'POST' ? 201 : 200
    }: {
      method?: string;
      data?: any;
      expectedStatus?: number;
    } = {}
  ) {
    const absoluteURL = `${BACKEND_URL}${relativeURL}`;

    const response = await fetch(absoluteURL, {
      method,
      headers: {
        Accept: 'application/json',
        ...(data !== undefined && {'Content-Type': 'application/json'})
      },
      ...(data !== undefined && {body: JSON.stringify(data)})
    });

    const result = await response.json();

    if (response.status !== expectedStatus) {
      throw new Error(
        `An error occurred while fetching the backend (status: ${
          response.status
        }, result: ${JSON.stringify(result)})`
      );
    }

    return result;
  }
};
