import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [travel, setTravel] = useState([]);

  const getTravel = async () => {
    let result = await axios.get(
      `http://localhost:4001/trips?keywords=${travel}`
    );
    setTravel(result.data.data);
  };

  useEffect(() => {
    getTravel();
  }, []);

  return (
    <div className="App">
      <div className="Travel-head">
        <h1 className="Travel-title">เที่ยวไหนดี</h1>
      </div>
      <div className="Travel-search">
        <input placeholder="ค้นหาที่เที่ยว"></input>
      </div>
      <div className="Travel-list">
        {travel.map((item) => {
          return (
            <div className="travelmain">
              <div className="travel-preview">
                <img src={item.photos[0]} width="350" height="350" />
              </div>
              <div className="travel-detail">
                <h1>{item.title}</h1>
                <h2>{item.description?.slice(0, 100)}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
