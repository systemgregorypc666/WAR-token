export default {
  async fetch(request, env, ctx) {
    const data = {
      sistema: "Genesis-IA",
      proyecto: "WAR-token",
      status: "Online",
      nodo: "Cloudflare Edge",
      timestamp: new Date().toISOString()
    };

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" // Permite que tu web lea estos datos
      }
    });
  }
};
