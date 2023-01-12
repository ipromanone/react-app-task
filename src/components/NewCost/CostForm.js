import './CostForm.css'
import React, {useState} from "react";
const CostForm = (props) => {

    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');


    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: '',
    // })
    const nameChangeHandler = (event) => {
        setInputName(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     name: event.target.value
        // })

        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         name: event.target.value
        //     }
        // })
    };
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
    };
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     date: event.target.value
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costData = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        };

        props.onSaveCostData(costData)
        setInputName('')
        setInputAmount('')
        setInputDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input onChange={nameChangeHandler} type='text' value={inputName}/>
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input onChange={amountChangeHandler} type='number' value={inputAmount} min='0.01' step='0.01'/>
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input type='date' onChange={dateChangeHandler} value={inputDate} min='2019-01-01' step='2022-12-31'/>
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить расходы</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;