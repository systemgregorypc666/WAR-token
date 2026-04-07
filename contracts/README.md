🔍 Contratos Incluidos
1. WAR_Token.sol
Es el contrato principal del token. Utiliza las librerías de OpenZeppelin para garantizar la seguridad contra ataques comunes (como desbordamientos o reentrada).

Funciones Clave:
constructor(): Al desplegar, se crean 1,000,000 de tokens WAR y se asignan a la billetera del creador (System Gregory PC).

mint(address to, uint256 amount): Permite la emisión de nuevos tokens. Esta función es onlyOwner, lo que significa que solo tú (o el Oráculo autorizado) pueden crear nuevos tokens.

burn(uint256 amount): Permite "quemar" tokens (eliminarlos de circulación). Se utiliza para reducir la oferta y dar estabilidad al valor del activo.

Parámetro,Valor
Nombre,WAR Token
Símbolo,WAR
Decimales,18 (Estándar BSC)
Red,BNB Smart Chain (Mainnet / Testnet)
Compilador,Solidity ^0.8.20
Librerías,"ERC20, Ownable (OpenZeppelin)"

Gemini dijo
Tienes razón, José Gregorio. Si el archivo README.md va dentro de la carpeta /contracts/, debe ser específico para los Contratos Inteligentes, explicando qué hacen y cómo se usan desde el punto de vista técnico.

Aquí tienes el contenido exacto para ese README.md especializado.

📝 Documentación de Contratos: WAR-token
Ecosistema Genesis-IA | System Gregory PC

Este directorio contiene el núcleo lógico del WAR-token en la red BNB Smart Chain (BSC). El contrato sigue el estándar BEP-20 y está diseñado para ser gestionado por un Oráculo externo que ajusta la economía del token según el precio real del oro.

🔍 Contratos Incluidos
1. WAR_Token.sol
Es el contrato principal del token. Utiliza las librerías de OpenZeppelin para garantizar la seguridad contra ataques comunes (como desbordamientos o reentrada).

Funciones Clave:
constructor(): Al desplegar, se crean 1,000,000 de tokens WAR y se asignan a la billetera del creador (System Gregory PC).

mint(address to, uint256 amount): Permite la emisión de nuevos tokens. Esta función es onlyOwner, lo que significa que solo tú (o el Oráculo autorizado) pueden crear nuevos tokens.

burn(uint256 amount): Permite "quemar" tokens (eliminarlos de circulación). Se utiliza para reducir la oferta y dar estabilidad al valor del activo.

🛠️ Especificaciones Técnicas
Parámetro	Valor
Nombre	WAR Token
Símbolo	WAR
Decimales	18 (Estándar BSC)
Red	BNB Smart Chain (Mainnet / Testnet)
Compilador	Solidity ^0.8.20
Librerías	ERC20, Ownable (OpenZeppelin)
🚀 Guía de Despliegue Rápido
Cargar WAR_Token.sol en Remix IDE.

Instalar la dependencia de OpenZeppelin:
npm install @openzeppelin/contracts

Compilar usando la versión 0.8.20 de Solidity.

En la pestaña Deploy, seleccionar Injected Provider (MetaMask).

Confirmar la transacción en la red BSC.

Aviso de Seguridad: La propiedad del contrato (Ownership) es vital. Una vez desplegado, la dirección del contrato debe ser actualizada en el Worker de Cloudflare (CONTRACT_ADDRESS) para que el ecosistema Genesis-IA funcione en sincronía.


