const web3 = new Web3(new Web3.providers.HttpProvider(
  'https://ropsten.infura.io/v3/f7f9c76c0c1849e1918fdb2e7ce15cd1'
));

const beatlesAddress = "0xaE26B69F28b977e9A4C95788F85CaE039896d2Bc";
const senderAddress = "0x263B9a8E742E577D0D8E3391e6a0f738cAdda9f9";
const privateKey = "f56e4f3d8cc32ce1958e576aeeb741636e0b9a46bab185d89a8d120a4e424ebd";

const beatlesABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_instrument",
        "type": "string"
      }
    ],
    "name": "addBeatle",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBeatles",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_instrument",
            "type": "string"
          }
        ],
        "internalType": "struct TheBeatles.Beatle[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];

//START HERE

