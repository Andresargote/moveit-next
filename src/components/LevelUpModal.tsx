import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/LevelUpModal.module.css";
function LevelUpModal () {
    const {level, closeLevelUpModal} = useContext(ChallengesContext);
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Felicidades 🎉</strong>
                <p>Alcanzaste un nuevo nivel</p>
                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Cerrar modal"/>
                </button>
            </div>
        </div>
    );
}
export default LevelUpModal;