function Title(props) {
  console.log("props title >", props);

  const handleChange = (e) => {
    console.log("handle text >>", e.target.value);
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
