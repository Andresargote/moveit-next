import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import {useSession} from "next-auth/client";
import styles from "../styles/components/Profile.module.css";

function Profile(){
    const {level} = useContext(ChallengesContext);
    const [session] = useSession();
    
    return(
        <div className={styles.profileContainer}>
            <img src={`${session.user.image}`} alt={`${session.user.name} icon`} />
            <div>
                <strong>{session.user.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level icon" />
                    Nivel {level}
                </p>
            </div>
        </div>
    );
}

export default Profile;