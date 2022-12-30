import "./App.css";
import Navbar from "./components/ResponsiveAppBar";
import Home from "./components/Home"
import Fund from "./components/Fund"
import Create from "./components/Create"
import {Routes, Route} from "react-router-dom"
import { ethers } from "ethers"
import {useEffect, useState} from 'react'


let abi = [
  {
    stateMutability: "payable",
    type: "receive",
    payable: true,
  },
  {
    inputs: [],
    name: "getvalue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "checkbal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "getter",
        type: "address",
      },
    ],
    name: "usage_send",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
];


function App() {
  //------------------- Setting up Provider, Contract & Signer For Functionalities -------------------
  const [Provider, setProvider] = useState()
  const [Signer, setSigner] = useState()
  const [Contract, setContract] = useState()
  
  const connect_metamask = async()=>{
    // const connect_metamask = async()=>{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract("0xafB03aafB3dB11AE4470463B9ff3eB6E302Dc20B",abi, Provider)      //Here its the address of contract on the test net blockchain
      // 0x06eCfcee0cAb51decc069b115B187DB6f18C8a44       //ganache local blockchain contract deployed address 

      setProvider(provider)
      setSigner(signer)
      setContract(contract)
      console.log("Setting up providers")
    // }
  }

  useEffect(() => {             //now this will connect automatically just after page start
    connect_metamask();
  }, [])
  //------------------- Setting up Provider, Contract & Signer For Functionalities -------------------

  
  return (
    <div className="App">
      {/* adding navbar to the page */}
      <Navbar></Navbar>
      <button type="button" onClick={connect_metamask}>Connect</button>
      <Routes>
        {/* So basically when you click any routing link then only the area is rendered rather than the whole page that's the advantage tbh */}
          <Route path="/" element={ <Home/> } />        
          <Route path="/Home" element={ <Home/> } />
          <Route path="Fund" element={ <Fund Provider = {Provider} Signer = {Signer} Contract={Contract}/> } />
          <Route path="Create" element={ <Create/> } />
      </Routes>
    </div>
  );
}

export default App;
