import "./App.css";
import Likes from "./Likes";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img
              src="https://images.pexels.com/photos/5943844/pexels-photo-5943844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Skydiving"
            />
            <Likes likes="3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
