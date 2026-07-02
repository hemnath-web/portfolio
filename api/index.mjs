import server from '../dist/server/server.js';

export default async function handler(req, res) {
  try {
    const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
    
    // Create standard Web Request
    const request = new Request(url.href, {
      method: req.method,
      headers: req.headers,
    });

    // Pass to Vinxi/TanStack server fetch handler
    const response = await server.fetch(request);

    // Pipe response back to Vercel Node res
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (response.body) {
      // response.body is a ReadableStream
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
      res.end();
    } else {
      res.end();
    }
  } catch (error) {
    console.error('Server error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
