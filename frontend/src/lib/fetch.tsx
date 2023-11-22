/**
 * Facade for fetch function
 * @param {RequestInfo|URL} input
 * @param {RequestInit|undefined} init?
 * @returns {Promise<Response>}
 */

export default async function getFetch(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<Response> {
  return await fetch(input, {
    ...init
  })
}
