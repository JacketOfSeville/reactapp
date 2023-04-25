import styles from './css/404.module.css'
import { Link } from 'react-router-dom';

function Page404() {
    return (
        <div>
            <img className={styles.center} src='https://http.cat/404.jpg'/>
            <h1 className={styles.text}>
                <Link className={styles.text} to='/'>Voltar ao início</Link>
            </h1>
        </div>
    )
}

export default Page404