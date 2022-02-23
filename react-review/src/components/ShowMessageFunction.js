import { useState, useEffect } from "react";

const ShowMessageFunction = ({ message }) => {
  // const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const msg = event.target[0].value;
    // setMessage(msg);
  };

  //   componentDidMount
  useEffect(() => {
    console.log("componente renderizado");
  }, []);

  //   componentDidUpdate
  useEffect(() => {
    console.log("Estado actualizado", message);

    // componentWillUnmount
    return () => {
      console.log("componente unmounted");
    };
  }, [message]);
  return (
    <form onSubmit={handleSubmit}>
      <h1>{message}</h1>
      {/* <input onChange={(event) => event.target.value}></input>
      <button type="submit">Show text</button> */}
    </form>
  );
};

export default ShowMessageFunction;
