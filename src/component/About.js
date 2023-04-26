import styles from './css/About.module.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div>
                <h1 className={`${styles.homeText} ${styles.header}`}>Sobre</h1>
            </div>
            <p className={styles.homeText}><Link to='/'>Início</Link></p>
        </div>
    )
}

export default Home