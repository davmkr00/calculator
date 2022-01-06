import styles from '../styles/Display.module.css';

export function Display({ value, handleChange }){
    return (
        <div>
            <input onChange={(e) => {handleChange(e)}} className={styles.input} type="text" value={value}/>
        </div>
    )
}