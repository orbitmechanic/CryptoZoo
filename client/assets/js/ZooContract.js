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

                this.instance.events.Birth().on('data', function(_event) {
                    console.info('Birth Event detected. ');
                    console.debug(_event);
                    $('#animalCreation').css('display', 'block');
                    $('#animalCreation').text( // Mom and Dad are always zero for Gen 0 animals.
                        'Created New Gen Zero Animal | ' +
                        'Owner: ' + _event.returnValues.owner + ' | ' +
                        'Animal Id: ' + _event.returnValues.animalId  + ' | ' +
                        'gene codes: ' +  _event.returnValues.genes); 
                }).on('error', console.error);

                },
            (_error) => {
                console.error('window.ethreum.enable error:' + _error);
                }
        );

        console.groupEnd();
    }

    // Mint generation zero animal
    mintGen0Animal() {
        console.groupCollapsed('ZooContract::mintGen0Animal()');

        console.info('Minting animal with DNA: ' + factoryDNA);

        console.info('Connected to MetaMask with instance: ');
        console.info(this.instance);

        this.instance.methods.createAnimalGen0(factoryDNA.toString()).send({}, function(_error, _txHash) {
            if(_error)
                console.error(_error);
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
