import {signin} from "next-auth/client";
import styles from "../styles/components/LoginWithGithub.module.css";

function LoginWithGithub(){
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <form>
                    <img className={styles.img} src="/icons/logoLogin.svg" alt="Moveit Logo"/>
                    
                    <div>
                        <h1>Bienvenido</h1>
                        <div className={styles.github}>
                            <a href="/api/auth/signin" onClick={(e) => {
                                e.preventDefault();
                                signin();
                            }}>
                                <span><img src="/icons/github.svg" alt="Github icon"/></span>
                                <p>Inicie sesión con su Github<br/> para comenzar</p>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginWithGithub;