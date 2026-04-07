import requests
import time

# Configuración de System Gregory PC
WORKER_URL = "https://war-token-api.genesis-ia.workers.dev/"
SECRET_TOKEN = "Goyo_2026_Secure_99" # Debe ser igual a la del panel de Cloudflare

def obtener_precio_oro():
    # Aquí puedes usar cualquier API de metales (ej: GoldAPI, MetalPrice, etc.)
    # Por ahora simulamos el dato para probar la conexión
    return 2355.50 

def enviar_a_cloudflare(precio):
    payload = {
        "precio": precio,
        "timestamp": time.time(),
        "origen": "Nodo-Goyo-Táchira"
    }
    
    headers = {
        "Authorization": SECRET_TOKEN,
        "Content-Type": "application/json"
    }

    try:
        response = requests.post(WORKER_URL, json=payload, headers=headers)
        if response.status_code == 200:
            print(f"✅ Éxito: Oro a ${precio} enviado a Genesis-IA")
        else:
            print(f"❌ Error {response.status_code}: {response.text}")
    except Exception as e:
        print(f"⚠️ Error de conexión: {e}")

if __name__ == "__main__":
    print("🚀 Iniciando Oráculo Genesis-IA...")
    precio_actual = obtener_precio_oro()
    enviar_a_cloudflare(precio_actual)
