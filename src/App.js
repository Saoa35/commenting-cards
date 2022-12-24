import "./App.css";
import Comments from "./Comments";
import Likes from "./Likes";
import Title from "./Title";

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
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
