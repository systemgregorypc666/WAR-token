from flask import Flask, render_template, jsonify, request
from web3 import Web3
import os
from dotenv import load_dotenv

# Cargamos las variables secretas
load_dotenv()

app = Flask(__name__)

# Configuración de Seguridad
app.config['SECRET_KEY'] = os.getenv("FLASK_SECRET")

# Conexión Blockchain (Usa tu propio nodo o Alchemy/Infura)
w3 = Web3(Web3.HTTPProvider(os.getenv("BLOCKCHAIN_RPC")))

@app.route('/')
def index():
    # Esta será la cara de tu Dashboard
    return "<h1>System Gregory PC: Centro de Mando WAR-token</h1><p>Estado: ONLINE</p>"

@app.route('/api/status')
def get_status():
    return jsonify({
        "node_connected": w3.is_connected(),
        "network": "Mainnet / Testnet",
        "owner": "José Gregorio Hernández Calderón",
        "system": "WAR-token Alpha"
    })

if __name__ == '__main__':
    # Cloudflare actuará como proxy, así que corremos en el puerto 5000 o 8080
    app.run(host='0.0.0.0', port=5000)
