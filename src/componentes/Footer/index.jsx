import styles from './Footer.module.scss';
import instagram from './instagram.svg'
import github from './github.svg'
import linkedin from './linkedin.svg'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.icones}>
                <a 
                target={'_blank'} 
                href="https://instagram.com/caioalves_dev?igshid=YmMyMTA2M2Y=">
                <img src={instagram} alt="Logo Instagram" /></a>

                <a 
                target={'_blank'} 
                href="https://github.com/CaioMAS?tab=repositories">
                <img src={github} alt="Logo GitHub" /></a>

                <a 
                target={'_blank'} 
                href="https://www.linkedin.com/in/caio-santos-332889160">
                <img src={linkedin} alt="Logo Linkedin" /></a>
            </div>

            <div>
                <p>Desenvolvido por Caio Santos</p>
            </div>
        </footer>
    )
}


export default Footer