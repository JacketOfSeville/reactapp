import styles from './css/Home.module.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1 className={styles.homeText}>Home</h1>
            <p className={styles.homeText}><Link to='/404'>Erro 404</Link></p>
        </div>
    )
}

export default Home