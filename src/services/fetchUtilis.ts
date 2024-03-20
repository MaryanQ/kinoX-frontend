/**
 * Utility Method to create options for a fetch call
 * @param method GET, POST, PUT, DELETE
 * @param body  The request body (only relevant for POST and PUT)
 * @returns
 */
export function makeOptions(method: string, body: object | null): RequestInit {
  const opts: RequestInit = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

/**
 * Utility Method to handle http-errors returned as a JSON-response with fetch
 * Meant to be used in the first .then() clause after a fetch-call
 */
export async function handleHttpErrors(res: Response) {
  if (!res.ok) {
    try {
      const errorResponse = await res.json();
      const errorMessage =
        errorResponse && errorResponse.message
          ? errorResponse.message
          : "No details provided";
      throw new Error(errorMessage);
    } catch (error) {
      // Unable to parse response as JSON, return a generic error message
      throw new Error("Failed to parse error response");
    }
  }
  return res.json();
}
