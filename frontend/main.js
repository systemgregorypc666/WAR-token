// Configuración base
const contractAddress = "TU_DIRECCION_DE_CONTRATO_AQUI";
const abi = [ /* El ABI generado al compilar tu contrato */ ];

let provider, signer, contract;

async function init() {
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        document.getElementById('connectWallet').onclick = connect;
    }
}

async function connect() {
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
    
    const address = await signer.getAddress();
    document.getElementById('connectWallet').innerText = address.substring(0,6) + "...";
    updateStats();
}

async function updateStats() {
    const supply = await contract.totalSupply();
    document.getElementById('totalSupply').innerText = ethers.utils.formatEther(supply);
}

// Inicializar al cargar
init();
