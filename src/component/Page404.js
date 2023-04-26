import styles from './css/404.module.css'
import { Link } from 'react-router-dom';
import Gato404 from './img/404.jpg';

function Page404() {
    return (
        <div>
            <img alt='' className={styles.center} src={Gato404}/>
            <h1 className={styles.text}>
                <Link className={styles.text} to='/'>Voltar ao início</Link>
            </h1>
        </div>
    )
}

export default Page404