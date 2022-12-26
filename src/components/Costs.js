import CostItem from "./CostItem";
import './Costs.css'

function Costs(props) {
    return (
        <div className='costs'>
            <CostItem date={props.costs[0].date} desvription={props.costs[0].description} amount={props.costs[0].amount}></CostItem>
            <CostItem date={props.costs[1].date} desvription={props.costs[1].description} amount={props.costs[1].amount}></CostItem>
            <CostItem date={props.costs[2].date} desvription={props.costs[2].description} amount={props.costs[2].amount}></CostItem>
        </div>
    )
}

export default Costs;