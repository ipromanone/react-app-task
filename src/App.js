import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
// import React from "react";

const App = () => {
    const costs = [
        {
            id: 'c1',
            date: new Date(2021,2,12),
            description: 'Холодильник',
            amount: 999.99,
        },
        {
            id: 'c2',
            date: new Date(2021,11,25),
            description: 'MacBook',
            amount: 1254.72,
        },
        {
            id: 'c2',
            date: new Date(2021,5,1),
            description: 'Джинсы',
            amount: 49.99,
        },
    ]

    // return  React.createElement('div', {},
    //         React.createElement('h1', {}, 'React-app-task'),
    //         React.createElement(Costs, {costs: costs}))

    const addCostHandler = (cost) => {
        console.log(cost)
        console.log('App Component')
    }

  return (
    <div>
        <NewCost onAddCost={addCostHandler}></NewCost>
        <Costs costs={costs}></Costs>
    </div>
  );
};

export default App;
