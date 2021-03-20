import styles from "../styles/components/Loader.module.css";

function Loader() {
    return (
        <div className={styles.container}>
            <p>Cargando...</p>
        </div>
    )
}

export default Loader;