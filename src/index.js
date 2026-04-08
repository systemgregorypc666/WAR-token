export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    // 1. Responder a validaciones de navegador (CORS)
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // 2. LÓGICA DE RECEPCIÓN (POST) - Cuando tu PC envía datos
    if (request.method === "POST") {
      try {
        const data = await request.json();
        
        // Guardamos los datos en WAR_STORAGE usando el nodo_id como llave
        await env.WAR_STORAGE.put(data.nodo_id, JSON.stringify({
          valor: data.valor_generado,
          fecha: new Date().toISOString(),
          proyecto: data.investigacion || "WAR-token"
        }));

        return new Response(JSON.stringify({ message: "✅ Valor registrado" }), { 
          status: 201, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: "Error en JSON" }), { 
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }

    // 3. LÓGICA DE VISUALIZACIÓN (GET) - Cuando entras desde el navegador
    try {
      // Buscamos específicamente el registro de tu nodo principal
      const dataRaw = await env.WAR_STORAGE.get("System_Gregory_Tachira_01");
      
      // Si el nodo ha enviado datos, los procesamos; si no, enviamos un estado inicial
      const registro = dataRaw ? JSON.parse(dataRaw) : { mensaje: "Nodo en espera de sincronización..." };

      const responseBody = {
        red: "WAR-token",
        estado_red: "Online",
        nodo_principal: "System_Gregory_Tachira_01",
        datos_actuales: registro,
        timestamp_servidor: new Date().toISOString()
      };

      return new Response(JSON.stringify(responseBody), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: "Error leyendo base de datos" }), { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
  }
};
