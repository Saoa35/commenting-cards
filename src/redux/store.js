const initialState = {
  likes: 10,
};

const reducer = (state = initialState, action) => {
  console.log("reducer >", action);

  return state;
};
