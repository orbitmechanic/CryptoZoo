#!/usr/bin/pyton3
import subprocess
import logging
import json

#---|----1----|----2----|----3----|----4----|----5----|----6----|----7----|----8--
def buildContracts():
    print('alignment::buildContracts()...')
    logging.debug('alignment::buildContracts()...')

    subprocess.run(['truffle','compile'])

#---|----1----|----2----|----3----|----4----|----5----|----6----|----7----|----8--
def copyAPI():
    print('alignment::copyAPI()...')
    logging.debug('alignment::copyAPI()...')

    with open('./build/contracts/datCryptAnimal.json') as f:
        data = json.load(f)
        newABI = data['abi']

    with open('./client/assets/js/abi.js') as old:

        

#---|----1----|----2----|----3----|----4----|----5----|----6----|----7----|----8--
def startGanache():
    print('alignment::startGanache()...')
    logging.debug('alignment::startGanache()...')

    # Requires $ npm install -g ganache-cli

    subprocess.run(['ganache-cli','"port":7545'])

#---|----1----|----2----|----3----|----4----|----5----|----6----|----7----|----8--
def connectGanache():
    print('alignment::connectGanache()...')
    logging.debug('alignment::connectGanache()...')

#---|----1----|----2----|----3----|----4----|----5----|----6----|----7----|----8--
def deployContracts():
    print('alignment::deployContracts()...')
    logging.debug('alignment::deployContracts()...')

#---|----1----|----2----|----3----|----4----|----5----|----6----|----7----|----8--
def copyAddress():
    print('alignment::copyAddress()...')
    logging.debug('alignment::copyAddress()...')

#---|----1----|----2----|----3----|----4----|----5----|----6----|----7----|----8--
def startServer():
    print('alignment::startServer()...')
    logging.debug('alignment::startServer()...')

    subprocess.run(['python3','-m', 'http.server'])

#---|----1----|----2----|----3----|----4----|----5----|----6----|----7----|----8--
def startWebPage():
    print('alignment::startWebPage()')
    logging.debug('alignment::startWebPage()...')


#---|----1----|----2----|----3----|----4----|----5----|----6----|----7----|----8--
def main():
    print('alignment::main()...')
    logging.debug('alignment::main()...')

    # Build contracts
    buildContracts()

    # Copy API
    copyAPI()

    # Start Ganache
    startGanache()

    # Connect contracts to Ganache
    connectGanache()

    # Deploy contracts 
    deployContracts()

    # Copy address 
    copyAddress()

    # Begin server
    startServer()

    # Load Web page
    startWebPage()

#---|----1----|----2----|----3----|----4----|----5----|----6----|----7----|----8--
if __name__ == "__main__"
    main()
