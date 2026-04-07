export default {
  async fetch(request, env, ctx) {
    // 1. Configuración de Seguridad (CORS)
    const corsHeaders = {
      "Access-Control-Allow-Origin": "https://war-token.pages.dev",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Responder a solicitudes de "pre-vuelo" (Navegadores)
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // 2. Lógica de Lectura de Datos
      // Intentamos sacar el último precio del oro guardado por el Oráculo
      // 'WAR_STORAGE' debe ser el nombre del binding en tu wrangler.toml
      const precioOro = await env.WAR_STORAGE.get("LAST_GOLD_PRICE") || "Cargando...";
      const ultimaQuema = await env.WAR_STORAGE.get("LAST_BURN_EVENT") || "Ninguna";

      // 3. Respuesta de la API
      const responseData = {
        proyecto: "WAR-token",
        empresa: "System Gregory PC",
        blockchain: "BNB Smart Chain",
        datos: {
          oro_actual: precioOro,
          ultima_quema: ultimaQuema,
          status_sistema: "Operativo"
        },
        timestamp: new Date().toISOString()
      };

      return new Response(JSON.stringify(responseData), {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json"
        }
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: "Error en el servidor Genesis-IA" }), {
        status: 500,
        headers: corsHeaders
      });
    }
  }
};
