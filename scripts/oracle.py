import time
import sys
import json
from datetime import datetime

try:
    import requests
except ImportError:
    print("\n❌ Error: Ejecuta 'pip install requests' en tu consola.\n")
    sys.exit(1)

# --- CONFIGURACIÓN ---
WORKER_URL = "https://war-token-api.genesis-ia.workers.dev/"
# Asegúrate de que este TOKEN sea el mismo que configuraste en Cloudflare
SECRET_TOKEN = "Goyo_2026_Secure_99" 

def enviar_datos():
    print(f"📡 [{datetime.now().strftime('%H:%M:%S')}] Conectando con la red WAR...")
    
    # Nombres de variables EXACTOS para tu index.js
    payload = {
        "nodo_id": "System_Gregory_Tachira_01",
        "valor_generado": 2385.50,
        "investigacion": "Biotecnología y Fusión"
    }
    
    headers = {
        "Authorization": SECRET_TOKEN,
        "Content-Type": "application/json"
    }

    try:
        response = requests.post(
            WORKER_URL, 
            data=json.dumps(payload), 
            headers=headers, 
            timeout=10
        )
        
        if response.status_code in [200, 201]:
            print("✅ ¡ÉXITO! Datos reflejados en la nube.")
            print(f"🛰️ Servidor dice: {response.text}")
        else:
            print(f"⚠️ ERROR {response.status_code}: {response.text}")
            
    except Exception as e:
        print(f"❓ Fallo de conexión: {e}")

if __name__ == "__main__":
    print("--- 🚀 INICIANDO NODO SYSTEM GREGORY PC ---")
    enviar_datos()
    print("--- 🏁 PROCESO FINALIZADO ---")
