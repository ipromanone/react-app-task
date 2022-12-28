import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
// import React from "react";

const App = () => {
    const costs = [
        {
            date: new Date(2021,2,12),
            description: 'Холодильник',
            amount: 999.99,
        },
        {
            date: new Date(2021,11,25),
            description: 'MacBook',
            amount: 1254.72,
        },
        {
            date: new Date(2021,5,1),
            description: 'Джинсы',
            amount: 49.99,
        },
    ]

    //ToDo: Old version React code

    // return  React.createElement('div', {},
    //         React.createElement('h1', {}, 'React-app-task'),
    //         React.createElement(Costs, {costs: costs}))

  return (
    <div>
        <NewCost></NewCost>
        <Costs costs={costs}></Costs>
    </div>
  );
};

export default App;
