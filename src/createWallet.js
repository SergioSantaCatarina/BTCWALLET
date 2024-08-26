//importando as dependencias
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//definindo a rede. Usaremos a testnet. A rede de produção é a mainnet
const network = bitcoin.networks.testnet

//criando o caminho de derivação das minhas carteiras usando o padrão de carteiras HD
const path = `m/49'/1'/0'/0`

//criando o mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

//criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network)

//criando uma conta - par de chaves privada e publica
let account = root.derivePath(path)
let node = account.derive(0).derive(0)

//gerando o endereço
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address

//escrevendo os dados gerados pela carteira
console.log("Carteira Gerada")
console.log("Endereço: ", btcAddress)
console.log("Chave privada: ",node.toWIF())
console.log("Seed: ", mnemonic)
