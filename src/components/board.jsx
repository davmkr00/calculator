import { Button } from "./button"
import styles from '../styles/Board.module.css';

export function Board({ handleClick }){
    return (
        <div>
            <div>
                <Button value="/" handleClick={handleClick} />
                <Button value="*" handleClick={handleClick} />
                <Button value="-" handleClick={handleClick} />
                <Button value="+" handleClick={handleClick} />
            </div>
            <div>
                <Button value="7" handleClick={handleClick} />
                <Button value="8" handleClick={handleClick} />
                <Button value="9" handleClick={handleClick} />
                <Button value="(" handleClick={handleClick} />
            </div>
            <div>
                <Button value="4" handleClick={handleClick} />
                <Button value="5" handleClick={handleClick} />
                <Button value="6" handleClick={handleClick} />
                <Button value=")" handleClick={handleClick} />
            </div>
            <div>
                <Button value="1" handleClick={handleClick} />
                <Button value="2" handleClick={handleClick} />
                <Button value="3" handleClick={handleClick} />
                <Button value="AC" handleClick={handleClick} />
            </div>
            <div>
                <Button value="0" handleClick={handleClick} />
                <Button value="." handleClick={handleClick} />
                <Button className={styles.btne} value="=" handleClick={handleClick} equal/>
            </div>
        </div>
    )
}