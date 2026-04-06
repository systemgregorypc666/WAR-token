export default {
  async fetch(request, env, ctx) {
    // Esto asegura que el navegador sepa que es una API, no una web
    return new Response(JSON.stringify({
      status: "API Genesis-IA Activa",
      last_gold_price: "2350.50",
      target: "WAR-token Autoliquidación"
    }), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" 
      }
    });
  }
}
