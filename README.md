# WAR-token
cryto  WAR-    WAR-token: Sistema de Autoliquidación de Deuda y Gestión de Riqueza
# 🛡️ WAR-token: Sistema de Autoliquidación de Deuda y Gestión de Riqueza

**Desarrollado por:** System Gregory PC  
**Investigador Principal:** José Gregorio Hernández Calderón  
**Estado del Proyecto:** Fase de Desarrollo Alpha (Abril 2026)

---

## 👁️ Visión del Proyecto
El **WAR-token** es una infraestructura financiera basada en Blockchain diseñada para la **reestructuración de deuda soberana** mediante la tokenización de activos reales (RWA). 

A diferencia de los tokens especulativos, el ecosistema WAR utiliza la riqueza tangible (Oro y Crudo) como motor de autoliquidación. El objetivo es proporcionar una herramienta tecnológica que permita a las naciones reducir su carga de deuda interna y externa mediante mecanismos de quema (burn) automatizados y transparentes.

> "Equilibrio a través de la tecnología: Transformando la deuda en riqueza líquida."

---

## 🏗️ Arquitectura Técnica

El sistema se basa en una arquitectura de tres capas (3-Tier) para garantizar el **control total** por parte del propietario:

### 1. Capa de Smart Contracts (Solidity)
* **Contrato Principal:** `WARtoken.sol` (Estándar ERC-20 modificado).
* **Mecanismo Deflacionario:** Tasa de quema ajustable (`burnRate`) por transacción.
* **Función de Autoliquidación:** Ejecución manual/automática de quema masiva respaldada por oráculos de materias primas.

### 2. Capa de Control Backend (Python / Web3.py)
* Gestión de llaves privadas y firma de transacciones fuera de la cadena (Off-chain).
* Conexión con Oráculos para monitoreo en tiempo real del precio del Oro y el Crudo.
* Base de datos privada para el registro histórico de deuda liquidada.

### 3. Interfaz de Mando (Frontend - React/Flask)
* Dashboard de control exclusivo para el administrador.
* Visualización de métricas: Deuda Total vs. Respaldo de Riqueza.
* Botón de ejecución de liquidación masiva con firma criptográfica.

---

## 🚀 Hoja de Ruta (14 Horas MVP)

- [x] **Hora 1-2:** Diseño de Arquitectura y Repositorio.
- [ ] **Hora 3-6:** Desarrollo y Testeo de Smart Contracts en Testnet.
- [ ] **Hora 7-10:** Configuración del Servidor Backend y Oráculo.
- [ ] **Hora 11-14:** Despliegue de Interfaz Web y Conexión Web3.

---

# 🪙 Proyecto Genesis-IA: WAR-token (Oracle System)
**Desarrollado por: System Gregory PC**

Este repositorio contiene la infraestructura completa para el ecosistema **WAR-token**, un activo digital vinculado al valor de referencia del oro, gestionado mediante un Oráculo automatizado y una API descentralizada en Cloudflare.

---

## 🚀 Arquitectura del Sistema

El sistema se divide en tres capas fundamentales que trabajan en sincronía:

1.  **Capa de Datos (Oráculo Python):** Un script local que consulta mercados de metales preciosos y propaga la información con seguridad cifrada.
2.  **Capa de Lógica (Cloudflare Workers):** Una API programada en JavaScript que valida los datos del Oráculo y los almacena en una base de datos de baja latencia (**KV Storage**).
3.  **Capa de Contrato (Smart Contracts):** Un contrato inteligente BEP-20 desplegado en la **BNB Smart Chain** que rige las reglas de emisión y quema del token.

---

## 🛠️ Tecnologías Utilizadas

* **Solidity 0.8.20:** Contratos inteligentes con estándares OpenZeppelin.
* **JavaScript (ES6):** Motor de la API en Cloudflare Workers.
* **Python 3.x:** Scripting del Oráculo y manejo de peticiones HTTP.
* **Cloudflare KV:** Almacenamiento persistente de datos de mercado.

---

## 📦 Estructura de Carpetas

| Carpeta | Descripción |
| :--- | :--- |
| `/contracts` | Código fuente del contrato `WAR_Token.sol`. |
| `/src` | Lógica del Worker de Cloudflare (`index.js`). |
| `/frontend` | Interfaz web del Dashboard de usuario. |
| `oracle.py` | Script del Oráculo para actualización de precios. |
| `wrangler.toml` | Configuración de despliegue para Cloudflare. |

---

## ⚙️ Configuración y Despliegue

### 1. Variables de Entorno (Secrets)
Para que el sistema sea seguro, es necesario configurar el `SECRET_TOKEN` en el panel de Cloudflare para validar las peticiones del Oráculo.

### 2. Ejecución del Oráculo
```bash
# Instalar dependencias
pip install requests

# Ejecutar actualización manual
python oracle.py



WAR-token es una herramienta de ingeniería financiera y geopolítica.
que observa los movimientos financieros de EE. UU.)
Consejo Pro: No lo digas como una promesa ("Voy a pagar la deuda"), dilo como una propuesta técnica ("El objetivo es demostrar un modelo de autoliquidación aplicable a deudas soberanas").

⚖️ Disclaimer (Aviso Legal)
IMPORTANTE: Este software se proporciona "tal cual", con fines de investigación, desarrollo y demostración técnica de modelos de ingeniería financiera aplicados a la blockchain.

No es Asesoría Financiera: El contenido de este repositorio no constituye asesoría de inversión, legal o financiera.

Responsabilidad: El autor (José Gregorio Hernández Calderón) y System Gregory PC no se hacen responsables por el uso que terceros den a este código, ni por pérdidas económicas derivadas de su implementación en entornos reales.

Cumplimiento: Es responsabilidad del usuario asegurarse de que cualquier implementación cumpla con las leyes locales e internacionales (OFAC, SEC, etc.).

## 🛠️ Instalación y Configuración Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/WAR-token.git](https://github.com/TU_USUARIO/WAR-token.git)
   cd WAR-token

https://war-token-api.genesis-ia.workers.dev/
