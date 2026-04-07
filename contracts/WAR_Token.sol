// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title WAR Token - Sistema Genesis-IA
 * @author System Gregory PC
 * @dev Token BEP-20 con funciones de quema y minter controlado por el Oráculo.
 */
contract WARToken is ERC20, Ownable {
    
    // El constructor define el nombre, el símbolo y quién es el dueño inicial (tú)
    constructor() ERC20("WAR Token", "WAR") Ownable(msg.sender) {
        // Emitimos 1,000,000 de tokens iniciales al desplegar
        // Nota: 18 decimales es el estándar de BSC
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    /**
     * @dev Función para emitir nuevos tokens. Solo el dueño (tú o el Oráculo) puede llamarla.
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    /**
     * @dev Función de quema (Burn). Permite reducir el suministro total de tokens
     * para aumentar la escasez y el valor del WAR-token.
     */
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
