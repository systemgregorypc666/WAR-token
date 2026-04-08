export default {
  async fetch(request, env) {
    if (request.method === "POST") {
      const data = await request.json();
      
      // Guardamos el valor en la base de datos KV
      // Usamos el ID del nodo como llave
      await env.WAR_STORAGE.put(data.nodo_id, JSON.stringify({
        valor: data.valor_generado,
        fecha: new Date().toISOString(),
        proyecto: data.investigacion
      }));

      return new Response("✅ Valor registrado en WAR_STORAGE", { status: 201 });
    }
    
    // Si entras desde el navegador (GET), te muestra los datos guardados
    const stats = await env.WAR_STORAGE.list();
    return new Response(JSON.stringify(stats), {
      headers: { "Content-Type": "application/json" }
    });
  }
};
