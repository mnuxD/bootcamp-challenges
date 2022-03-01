import "./App.css";
import { Form, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [temperature, setTemperature] = useState("");
  const [stateDegree, setStateDegree] = useState("");
  const [finalTemperature, setFinalTemperature] = useState(0);
  const clear = (e) => {
    e.preventDefault();
    e.target.reset();
    setTemperature("");
  };
  const operation = () => {
    if (temperature) {
      if (stateDegree === "1") {
        const temp = 1.8 * parseFloat(temperature) + 32;
        setFinalTemperature(temp);
      } else if (stateDegree === "2") {
        const temp = ((parseFloat(temperature) - 32) * 5) / 9;
        setFinalTemperature(temp);
      } else setFinalTemperature("");
    } else setFinalTemperature("");
  };

  const inputTemperature = (e) => {
    setTemperature(e.target.value);
    console.log(finalTemperature);
  };

  useEffect(() => {
    operation();
  }, [temperature, stateDegree]);

  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <h4>
        This app is capable of converting temperatures from Celsius to
        Fahrenheit and vice versa.
      </h4>
      <div className="containerForm">
        <Form onSubmit={clear}>
          <Form.Label htmlFor="temperature">Input the Temperature</Form.Label>
          <div className="containerForm__form">
            <Form.Control
              onChange={inputTemperature}
              type="number"
              id="temperature"
            />
            <Button type="sumbit">Clear</Button>
          </div>
        </Form>
      </div>
      <div className="containerForm">
        <Form.Select
          value={stateDegree}
          onChange={(e) => setStateDegree(e.target.value)}
        >
          <option>Select the type of conversion</option>
          <option value="1">Celsius to Fahrenheit</option>
          <option value="2">Fahrenheit to Celsius</option>
        </Form.Select>
      </div>
      <div className="containerAnswer">
        <Card className="containerAnswer__card">
          <Card.Title>Celsius</Card.Title>

          <Card.Text className="containerAnswer__card__text">
            {stateDegree === "2" ? `${finalTemperature} °C` : ""}
          </Card.Text>
        </Card>
        <Card className="containerAnswer__card">
          <Card.Title>Fahrenheit</Card.Title>

          <Card.Text className="containerAnswer__card__text">
            {stateDegree === "1" ? `${finalTemperature} °F` : ""}
          </Card.Text>
        </Card>
      </div>
    </div>
  );
}

export default App;
