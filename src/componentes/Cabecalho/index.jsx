import logo from './logo.png'
import search from './search.png'
import styles from './Cabecalho.module.scss'

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <img className={styles.logo} src={logo} alt="Logo do Space" />
            <div className={styles.cabecalhoContainer}>
                <input className={styles.cabecalhoInput} type="text" 
                placeholder="O que procura ?"/>
                <img className={styles.image}  src={search} alt="Ícone de busca" />
            </div>
        </header>
    )
}


export default Cabecalho