import time
import sys

# Intentar importar requests, si no, dar instrucciones claras
try:
    import requests
except ImportError:
    print("\n❌ Error: No tienes instalada la librería 'requests'.")
    print("👉 Solución: Ejecuta este comando en tu terminal: pip install requests\n")
    sys.exit(1)

# --- CONFIGURACIÓN DE SYSTEM GREGORY PC ---
# Esta es la URL de tu cerebro en la nube
WORKER_URL = "https://war-token-api.genesis-ia.workers.dev/"

# CLAVE DE SEGURIDAD: Debe ser IDÉNTICA a la que pusiste en el panel de Cloudflare
SECRET_TOKEN = "Goyo_2026_Secure_99" 

def enviar_precio_oro(precio):
    """
    Envía el precio del oro al Worker de Cloudflare usando una petición POST segura.
    """
    print(f"🛰️ Preparando envío: Precio Oro a ${precio} USD...")
    
    # El 'paquete' de datos que viaja por internet
    payload = {
        "precio": precio,
        "timestamp": int(time.time()),
        "nodo": "System-Gregory-PC-Tachira"
    }
    
    # Las 'credenciales' para que el Worker te deje pasar
    headers = {
        "Authorization": SECRET_TOKEN,
        "Content-Type": "application/json"
    }

    try:
        # Realizamos la conexión
        response = requests.post(WORKER_URL, json=payload, headers=headers, timeout=10)
        
        if response.status_code == 200:
            print("✅ ¡ÉXITO! Datos sincronizados con Genesis-IA.")
            print(f"📡 Respuesta del servidor: {response.text}")
        elif response.status_code == 401:
            print("🚫 ERROR DE SEGURIDAD: El SECRET_TOKEN es incorrecto.")
            print("👉 Revisa el panel de 'Variables y Secretos' en Cloudflare.")
        else:
            print(f"⚠️ ERROR {response.status_code}: {response.text}")
            
    except requests.exceptions.ConnectionError:
        print("🔥 ERROR DE RED: No se pudo contactar con el Worker. Revisa tu internet.")
    except Exception as e:
        print(f"❓ ERROR INESPERADO: {e}")

if __name__ == "__main__":
    print("--- INICIANDO ORÁCULO GENESIS-IA ---")
    
    # Valor de prueba (Pronto lo cambiaremos por una API real)
    precio_actual = 2385.50 
    
    enviar_precio_oro(precio_actual)
    print("--- FIN DE LA OPERACIÓN ---")
