import ReactDOM from "react-dom/client";
import { useState } from "react";

function Myform() {
  const [inputs, setInputs] = useState({});

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(inputs);
};
return (
  <form onSubmit={handleSubmit}>
    <label>
      Enter your name:
      <input
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={handlechange}
      />
    </label>
    <label>
      Enter your age:
      <input
        type="number"
        name="age"
        value={inputs.age || ""}
        onChange={handlechange}
      />
    </label>
    <input type="submit"/>
  </form>
);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Myform/>);
