import requests
import time

# --- CONFIGURACIÓN ---
# La URL que ya tienes funcionando
WORKER_URL = "https://war-token-api.genesis-ia.workers.dev/"

# DEBE SER EXACTAMENTE LA MISMA QUE PUSISTE EN CLOUDFLARE
SECRET_TOKEN = "Goyo_2026_Secure_99" 

def enviar_precio_oro(precio):
    print(f"Propagando precio: ${precio} USD...")
    
    # Preparamos el paquete de datos
    payload = {
        "precio": precio,
        "origen": "System Gregory PC - Nodo Central"
    }
    
    # Añadimos tu firma de seguridad (el Secreto)
    headers = {
        "Authorization": SECRET_TOKEN,
        "Content-Type": "application/json"
    }

    try:
        # Enviamos la información a la nube
        response = requests.post(WORKER_URL, json=payload, headers=headers)
        
        if response.status_code == 200:
            print("✅ ¡Éxito! El Worker recibió y guardó el precio en el KV.")
        elif response.status_code == 401:
            print("❌ Error de Seguridad: El SECRET_TOKEN no coincide.")
        else:
            print(f"⚠️ Error del Servidor ({response.status_code}): {response.text}")
            
    except Exception as e:
        print(f"🔥 Error de conexión: {e}")

if __name__ == "__main__":
    # Prueba manual: enviamos un precio de ejemplo
    # En el futuro, aquí conectaremos la API de metales en vivo
    precio_test = 2385.50 
    enviar_precio_oro(precio_test)
