import web3 from "./web3";

const rinkebyAddress = "0xE41f806f7e31004CeCefA1A016e99c930C115c48";
// const abi = [
//   {
//     inputs: [],
//     stateMutability: "nonpayable",
//     type: "constructor",
//     constant: undefined,
//     payable: undefined,
//     signature: "constructor"
//   },
//   {
//     inputs: [],
//     name: "enroll",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//     constant: undefined,
//     payable: true,
//     signature: "0xe65f2a7e"
//   },
//   {
//     inputs: [],
//     name: "getPlayers",
//     outputs: [[Object]],
//     stateMutability: "view",
//     type: "function",
//     constant: true,
//     payable: undefined,
//     signature: "0x8b5b9ccc"
//   },
//   {
//     inputs: [],
//     name: "manager",
//     outputs: [[Object]],
//     stateMutability: "view",
//     type: "function",
//     constant: true,
//     payable: undefined,
//     signature: "0x481c6a75"
//   },
//   {
//     inputs: [],
//     name: "pickWinner",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//     constant: undefined,
//     payable: undefined,
//     signature: "0x5d495aea"
//   },
//   {
//     inputs: [[Object]],
//     name: "players",
//     outputs: [[Object]],
//     stateMutability: "view",
//     type: "function",
//     constant: true,
//     payable: undefined,
//     signature: "0xf71d96cb"
//   }
// ];

const abi = [
  {
    inputs: [],
    name: "enroll",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "pickWinner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "getPlayers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "players",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

export default new web3.eth.Contract(abi, rinkebyAddress);
