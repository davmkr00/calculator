import styles from '../styles/Board.module.css';

export function Button({ value, handleClick, equal }){
    const btnStyle = equal ? styles.btn_equal : styles.btn
    return (
        <button className={btnStyle} onClick={() => {handleClick(value)}}>{value}</button>
    )
}