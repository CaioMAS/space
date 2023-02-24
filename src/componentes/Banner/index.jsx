import styles from './Banner.module.scss'
import banner from './banner.png'


const Banner = () => {
    return (
        <div className={styles.container__imagem}>
            <h1>Conheça a complexidade do espaço</h1>
            <img src={banner} alt="A imagem do planeta terra vista do espaço" />
        </div>
    )
}


export default Banner