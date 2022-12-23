import { connect } from "react-redux";

function Likes(props) {
  console.log(props);
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
      <button onClick={props.onDicrementLikes}>Dislike</button>
    </div>
  );
}

function mapStateToProps(state) {
  const { likesReducer } = state;

  return {
    likes: likesReducer.likes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrementLikes: () => {
      const action = { type: "INCREMENT" };
      dispatch(action);
    },

    onDicrementLikes: () => {
      const action = { type: "DECREMENT" };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
