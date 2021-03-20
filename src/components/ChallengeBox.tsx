import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContext";
import styles from "../styles/components/ChallengeBox.module.css";
function ChallengeBox() {
    const {activeChallenges, resetChallenges, completeChallenge} = useContext(ChallengesContext);
    const {resetCountdown} = useContext(CountdownContext);
    const handleChallengeSucceeded = () => {
        completeChallenge();
        resetCountdown();
    }
    const handleChallengeFailed = () => {
        resetChallenges();
        resetCountdown();
    }
    return (
        <div className={styles.challengeBoxContainer}>
            {(activeChallenges) ? (
                <div className={styles.challengeActive}>
                    <header>
                        Gane {activeChallenges.amount} xp
                    </header>
                    <main>
                        <img src={`icons/${activeChallenges.type}.svg`}/>
                        <strong>Nuevo desafio</strong>
                        <p>{activeChallenges.description}</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.challengesFailedButton} onClick={handleChallengeFailed}>Falle</button>
                        <button type="button" className={styles.challengesSuccededButton} onClick={handleChallengeSucceeded}>Terminado</button>
                    </footer>
                </div>
            ) : (
            <div className={styles.challengeNotActive}>
                <strong>Finalizar un ciclo para recibir desafios</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                    Avance de nivel completando desafios.
                </p>
            </div>
            )}
        </div>
    );
}
export default ChallengeBox;