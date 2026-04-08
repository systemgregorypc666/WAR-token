export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

    if (request.method === "POST") {
      try {
        const data = await request.json();
        
        // Guardamos usando el nodo_id como llave
        await env.WAR_STORAGE.put(data.nodo_id, JSON.stringify({
          valor: data.valor_generado,
          fecha: new Date().toISOString(),
          proyecto: "WAR-token"
        }));

        return new Response(JSON.stringify({ message: "✅ Valor registrado" }), { 
          status: 201, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        });
      } catch (err) {
        return new Response("Error en JSON", { status: 400 });
      }
    }

    // Al entrar por el navegador (GET), listamos las llaves guardadas
    const stats = await env.WAR_STORAGE.list();
    return new Response(JSON.stringify(stats), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
};
