import { useState, useEffect } from "react";
import "./App.css";
import { ResponsiveAppBar } from "./AppBar";
import { JokeItem } from "./JokeItem";
import { CreatejokeForm } from "./CreatejokeForm";
import { JokeList } from "./JokeList";


function App() {
  const [customers, setCustomers] = useState([]);
  const [jokes, setJokes] = useState([]);


  useEffect(() => {
    const fetchCustomerData = async () => {
      const data = await fetch("https://ondeck-backend12.herokuapp.com/customers");

      const json = await data.json();

      setCustomers(json);
    };

    const fetchJokeData = async () => {
      const data = await fetch(
        "https://ondeck-backend12.herokuapp.com/api/jokes"
      );

      const json = await data.json();

      setJokes(json);
    };

    fetchJokeData();
    fetchCustomerData();
  }, []);

  useEffect(() => {
    console.log({ customers });
  }, [customers]);

  useEffect(() => {
    console.log({ jokes });
  }, [jokes]);
  
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <CreatejokeForm/>
      <JokeList items={jokes} component ={JokeItem} />
    </div>
  );
};

export default App;