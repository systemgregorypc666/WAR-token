export default {
  async fetch(request, env, ctx) {
    // 1. Configuración de seguridad (CORS) para que tu web pueda leer la API
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*", // Puedes cambiar "*" por "https://war-token.pages.dev"
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    // Responder a las validaciones automáticas de los navegadores (OPTIONS)
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // 2. FILTRO DE SEGURIDAD PARA EL ORÁCULO
    // Solo validamos el token si la petición es POST (cuando Python envía datos)
    if (request.method === "POST") {
      const bache_token = request.headers.get("Authorization");
      
      // Si el token no coincide con el que pusiste en el Panel de Cloudflare
      if (bache_token !== env.SECRET_TOKEN) {
        return new Response(JSON.stringify({ error: "No autorizado" }), { 
          status: 401, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        });
      }

      // 3. LÓGICA PARA GUARDAR DATOS (POST)
      try {
        const body = await request.json();
        // Guardamos el precio en la memoria KV con el ID 450a48...
        await env.WAR_STORAGE.put("LAST_GOLD_PRICE", body.precio.toString());
        
        return new Response(JSON.stringify({ message: "Precio actualizado" }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response("Error procesando JSON", { status: 400 });
      }
    }

    // 4. LÓGICA PARA MOSTRAR DATOS (GET) - Lo que ves en el navegador
    try {
      const precioOro = await env.WAR_STORAGE.get("LAST_GOLD_PRICE") || "0.00";
      
      const responseData = {
        sistema: "Genesis-IA",
        token: "WAR",
        oro_referencia: precioOro,
        timestamp: new Date().toISOString()
      };

      return new Response(JSON.stringify(responseData), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    } catch (e) {
      return new Response("Error de conexión KV", { status: 500 });
    }
  }
};
