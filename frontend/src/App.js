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
  

  useEffect(() => {             //now this will connect automatically just after page start
    const connect_metamask = async()=>{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const accounts = await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const contract = new ethers.Contract("0x06eCfcee0cAb51decc069b115B187DB6f18C8a44",abi, Provider)


      setProvider(provider)
      setSigner(signer)
      setContract(contract)
    }

    connect_metamask();
  }, [])
  //------------------- Setting up Provider, Contract & Signer For Functionalities -------------------

  return (
    <div className="App">
      {/* adding navbar to the page */}
      <Navbar></Navbar>
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
