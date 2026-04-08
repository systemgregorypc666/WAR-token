export default {
  async fetch(request, env) {
    // 1. Configuración de CORS
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    // 2. Lógica para recibir datos (POST)
    if (request.method === "POST") {
      try {
        const data = await request.json();

        // --- ZONA DE DIAGNÓSTICO (Aquí van tus logs) ---
        console.log("📥 Datos recibidos desde Táchira:", JSON.stringify(data));
        console.log("🔑 Token recibido:", request.headers.get("Authorization"));
        // -----------------------------------------------

        // Guardamos en KV usando el ID del nodo como llave
        await env.WAR_STORAGE.put(data.nodo_id, JSON.stringify({
          valor: data.valor_generado,
          fecha: new Date().toISOString(),
          proyecto: data.investigacion
        }));

        return new Response(JSON.stringify({ message: "✅ Valor registrado" }), { 
          status: 201,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });

      } catch (err) {
        console.log("❌ Error procesando el envío:", err.message);
        return new Response("Error en el formato JSON", { status: 400 });
      }
    }

    // 3. Lógica para ver datos (GET)
    try {
      const stats = await env.WAR_STORAGE.list();
      return new Response(JSON.stringify(stats), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    } catch (e) {
      return new Response("Error de conexión KV", { status: 500 });
    }
  }
};
