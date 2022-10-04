import { useState, useEffect } from "react";
import { List } from "./List";
import "./App.css";
// import { JokeItem } from "./JokeItem";
import { CustomerItem } from "./CustomerItem";
import { CreateUserForm } from "./CreateUserForm";
import { ResponsiveAppBar } from "./AppBar";

function App() {
  const [customers, setCustomers] = useState([]);
  const [trades, setTrades] = useState([]);


  useEffect(() => {
    const fetchCustomerData = async () => {
      const data = await fetch("https://ondeck-backend12.herokuapp.com/customers");

      const json = await data.json();

      setCustomers(json);
    };

    const fetchTradeData = async () => {
      const data = await fetch(
        "https://ondeck-backend12.herokuapp.com/api/jokes"
      );

      const json = await data.json();

      setTrades(json);
    };

    fetchTradeData();
    fetchCustomerData();
  }, []);

  useEffect(() => {
    console.log({ customers });
  }, [customers]);

  useEffect(() => {
    console.log({ trades });
  }, [trades]);
  
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <CreateUserForm />
      <List items={customers} component={CustomerItem} />
    </div>
  );
};

export default App;