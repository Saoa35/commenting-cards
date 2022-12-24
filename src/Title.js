import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";

function Title(props) {
  console.log("props title >", props);

  const title = useSelector((state) => {
    console.log("state >>", state);
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };

  return (
    <div className="card-title">
      <div className="card-title-top">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter photo name"
        />
      </div>
    </div>
  );
}

export default Title;
