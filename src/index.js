export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://war-token.pages.dev",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Responder a validaciones del navegador
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // Leemos los datos que guardará tu script de Python
      const precioOro = await env.WAR_STORAGE.get("LAST_GOLD_PRICE") || "0.00";
      const totalQuemado = await env.WAR_STORAGE.get("TOTAL_BURNED") || "0";

      const data = {
        sistema: "Genesis-IA",
        token: "WAR",
        oro_referencia: precioOro,
        tokens_quemados: totalQuemado,
        last_update: new Date().toISOString()
      };

      return new Response(JSON.stringify(data), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: "Error de conexión KV" }), { 
        status: 500, 
        headers: corsHeaders 
      });
    }
  }
};
