import corgi from "./corgi.jpg";
import {useState} from "react"
import "./App.css";

const App = () => {
  const[amountOfLikes, setAmountOfLikes] = useState(0)
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <button onClick={() => setAmountOfLikes(amountOfLikes+1)}>Like</button>
      <p>Amount of likes: {amountOfLikes}</p>
    </div>
  );
};

export default App;
