import time
import sys
import json
from datetime import datetime

# Intentar importar requests
try:
    import requests
except ImportError:
    print("\n❌ Error: No tienes 'requests'. Ejecuta: pip install requests\n")
    sys.exit(1)

# --- CONFIGURACIÓN DE SYSTEM GREGORY PC ---
WORKER_URL = "https://war-token-api.genesis-ia.workers.dev/"
# Asegúrate de que este TOKEN sea el mismo que pusiste en Cloudflare
SECRET_TOKEN = "Goyo_2026_Secure_99" 

def enviar_datos_al_nodo(valor, tema):
    """
    Envía datos de investigación al almacén KV de Cloudflare.
    """
    print(f"📡 [{datetime.now().strftime('%H:%M:%S')}] Iniciando sincronización...")
    
    # IMPORTANTE: Estos nombres deben coincidir exactamente con tu index.js
    payload = {
        "nodo_id": "System_Gregory_Tachira_01",
        "valor_generado": valor,
        "investigacion": tema
    }
    
    headers = {
        "Authorization": SECRET_TOKEN,
        "Content-Type": "application/json"
    }

    try:
        # Usamos json.dumps para asegurar que el formato sea perfecto para el Worker
        response = requests.post(
            WORKER_URL, 
            data=json.dumps(payload), 
            headers=headers, 
            timeout=15
        )
        
        if response.status_code in [200, 201]:
            print("✅ ¡ÉXITO! Valor registrado en WAR_STORAGE.")
            print(f"🛰️ Respuesta: {response.text}")
            return True
        elif response.status_code == 401:
            print("🚫 ERROR 401: Token no autorizado. Revisa el SECRET_TOKEN.")
        else:
            print(f"⚠️ ERROR {response.status_code}: {response.text}")
            
    except requests.exceptions.ConnectionError:
        print("🔥 ERROR DE RED: Revisa tu conexión a internet en Táchira.")
    except Exception as e:
        print(f"❓ ERROR: {e}")
    return False

if __name__ == "__main__":
    print("--- 🚀 ORÁCULO WAR-TOKEN ACTIVADO ---")
    
    # Aquí puedes poner el valor de tu investigación
    valor_de_prueba = 2385.50 
    tema_de_prueba = "Biotecnología y Fusión"
    
    enviar_datos_al_nodo(valor_de_prueba, tema_de_prueba)
    
    print("--- 🏁 OPERACIÓN COMPLETADA ---")
      
