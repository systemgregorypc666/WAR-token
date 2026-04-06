import os
import time
import requests
from web3 import Web3
from dotenv import load_dotenv

# Cargamos las llaves desde el .env que tienes en la raíz o backend
load_dotenv()

# Configuración técnica
RPC_URL = os.getenv("BLOCKCHAIN_RPC")
PRIVATE_KEY = os.getenv("PRIVATE_KEY")
CONTRACT_ADDR = os.getenv("CONTRACT_ADDRESS")
# API de metales (ejemplo: GoldAPI.io o similar)
GOLD_API_URL = "https://www.goldapi.io/api/XAU/USD" 

w3 = Web3(Web3.HTTPProvider(RPC_URL))
account = w3.eth.account.from_key(PRIVATE_KEY)

def get_gold_price():
    headers = {'x-access-token': os.getenv("MARKET_API_KEY")}
    response = requests.get(GOLD_API_URL, headers=headers)
    return response.json()['price']

def update_liquidation(price):
    # Aquí es donde el script "habla" con tu Smart Contract
    print(f"🚀 Actualizando sistema con precio de Oro: ${price}")
    # Nota: Aquí llamarías a la función del contrato que definimos antes
    # tx = contract.functions.selfLiquidate(amount, "Oracle Update").build_transaction(...)

if __name__ == "__main__":
    while True:
        try:
            current_price = get_gold_price()
            update_liquidation(current_price)
            # Esperar 1 hora antes de la siguiente actualización
            time.sleep(3600) 
        except Exception as e:
            print(f"❌ Error en el Oráculo: {e}")
            time.sleep(60)
