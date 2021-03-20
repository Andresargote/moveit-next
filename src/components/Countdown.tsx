import {useContext} from "react";
import { CountdownContext } from "../context/CountdownContext";
import styles from "../styles/components/Countdown.module.css";
function Countdown(){
    const {minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown} = useContext(CountdownContext);
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, "0").split("");
    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo finalizado
                </button>
            ) : (
                <>
                {   (isActive) ? ( 
                    <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                        Abandonar ciclo
                    </button>
                ) : (
                    <button type="button" className={styles.countdownButton} onClick={startCountdown}>
                        Iniciar ciclo
                    </button>
                )}
                </>
            )}
        </div>
    );  
}
export default Countdown;