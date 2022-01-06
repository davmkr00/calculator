import { Display } from "./display";
import { Board } from "./board";
import {useState} from 'react'
import styles from '../styles/Display.module.css';

export function Calculator(){
    const [expression, setExpression] = useState('0');

    const handleClick = (value) => {
        if (value === "="){
            let result
            try{
                result = eval(expression)
            }catch{
                alert('Expression is incorrect')
            }
            setExpression(result)
        }else if (value === "AC"){
            setExpression('')
        }else if (expression === '0' && value !== '.'){
            setExpression(value)
        }else{
        setExpression(expression + value)
        }
    }
    const handleChange = (e) =>{
        setExpression(e.target.value)
    }
    return (
        <>
            <Display handleChange={handleChange} value={expression} />
            <div className={styles.space}></div>
            <Board handleClick={handleClick} />
        </>
    )
}