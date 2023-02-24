import home from '../../assets/icones/home-ativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreenda from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <img src={home} alt="" />
                    <a href="">Início</a>
                </li>

                <li className={styles.item}>
                    <img src={maisCurtidas} alt="" />
                    <a href="">Mais curtidas</a>
                </li>

                <li className={styles.item}>
                    <img src={maisVistas} alt="" />
                    <a href="">Mais vistas</a>
                </li>

                <li className={styles.item}>
                    <img src={novas} alt="" />
                    <a href="">Novas</a>
                </li>

                <li className={styles.item}>
                    <img src={surpreenda} alt="" />
                    <a href="">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}


export default Menu