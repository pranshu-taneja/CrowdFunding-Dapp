import FlexProject from "./FlexProject";
import { v4 as uuidv4 } from "uuid";
import data from "./data.json";
import axios from 'axios'

function Fund(props) {
  // const [Projects, setProjects] = useState([])

  const Provider = props.Provider;
  const Contract = props.Contract;
  const Signer = props.Signer;

  const create = async () => {
    let accN = await document.getElementById("accN").value;
    let e = { acc: accN };
    data.push(e);
    console.log("data:", data);
  };

  const render = data.map((post) => {
    return (
      <FlexProject
        key={uuidv4()}
        Provider={Provider}
        Signer={Signer}
        Contract={Contract}
        AccN={post.acc}
      ></FlexProject>
    );
  });

  const success = async () => {
   const one = await axios.get('/demo')
   console.log(one.data);
  };

  return (
    <div className="App">
      <input id="accN" type="text" />
      <button id="create" onClick={create}>
        CreateProject
      </button>
      <button id="success" onClick={success}>
        Success
      </button>
      <div className="Projects" id="pro">
        {render}
      </div>
    </div>
  );
}

export default Fund;
