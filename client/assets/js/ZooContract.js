// JS object wrapper for the CryptAnimal.sol contract.
class ZooContract {

    // layout bridge parts.
    constructor() {
        console.groupCollapsed('ZooContract::constructor():');

        this.web3 = new Web3(Web3.givenProvider);
        console.debug('web3 instantiated.');
        window.ethereum.autoRefreshOnNetworkChange = false;

        this.contractAddress = '0xEeD2f417e0b23b833057C6188e3373CbBfb5F563';
        console.info('contract Address = ' + this.contractAddress);

        this.instance;
        this.user;

        console.groupEnd();
    }
    
    // Connect bridge to EVM
    applyMembership() {
        console.groupCollapsed('ZooContract::applyMembership():');

        window.ethereum.request({method: 'eth_requestAccounts'}).then(
            (_accounts) => {
                console.debug("window.ethereum.enable'd.");

                this.instance = new this.web3.eth.Contract(
                    abi, this.contractAddress, { from: _accounts[0] });
                console.info('Connected to MetaMask with instance: ');
                console.info(this.instance);

                this.user = _accounts[0];
                console.info('Using account: ' + this.user);
                },
            (_error) => {
                console.error('window.ethreum.enable error:' + _error);
                }
        );

        console.groupEnd();
    }

    // Mint generation zero animal
    mintGen0Animal(_dna) {
        console.groupCollapsed('ZooContract::minGen0Animal()');

        const dnaCode = _dna.toString();
        console.info('Minting animal with DNA: ' + dnaCode);

        console.info('Connected to MetaMask with instance: ');
        console.info(this.instance);

        this.instance.methods.createAnimalGen0(dnaCode).send({}, function(_error, _txHash) {
            if(err)
                console.error(err);
            else 
                console.info('Tx Hash: ' + _txHash);
        });

        console.groupEnd();
    }

    toString(){
        console.groupCollapsed('ZooContract::toString()');
        var out = '';
        out += 'ZooContract\n';
        out += '  contract address: \n';
        out += '    ' + this.contractAddress + '\n';
        out += '  connected as address:\n';
        out += '    ' + this.user + '\n';
        console.groupEnd();
        return out;
    }
}
