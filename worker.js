addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  url.hostname = 'https://monsterpricetrackerextension.crnapagoda.workers.dev'  // Replace with your Flask server domain
  url.pathname = '/api/prices'  // Ensure the correct API path
  const newRequest = new Request(url, request)
  const response = await fetch(newRequest)
  const newResponse = new Response(response.body, response)
  newResponse.headers.set('Access-Control-Allow-Origin', '*')
  return newResponse
}
