import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props){
    //function clickHandler(){}
    const [title,setTitle] =useState(props.title);
    // this useState functions must be called inside and at the top of the main component function but not outside or in nested functions.
    // this useState function must be used if we are planninngo change tge values on the fly like changing varibales on clicking btn e.t.c.,
    // this useState function is one of the famous react hook.
    
    const clickHandler =() => {
    setTitle('Updated');
    }
    return (
    <Card className="expense-item">
        
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2 >{title}</h2> 
                <div className="expense-item__price ">${props.amount}</div>
            </div> 
            <button onClick={clickHandler}>Change Title</button>
                      
    </Card>
   );    
}

export default ExpenseItem;