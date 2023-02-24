import Banner from "../../componentes/Banner"
import Cabecalho from "../../componentes/Cabecalho"
import Footer from "../../componentes/Footer"
import Galeria from "../../componentes/Galeria"
import Menu from "../../componentes/Menu"

import styles from "./PaginaInicial.module.scss"

const PaginaInicial = () => {
    return (
        <>
            <Cabecalho />
            <main>
                <section className={styles.container}>
                    <Menu />
                    <Banner/>
                </section>
                <div>
                <Galeria/>                
            </div> 
            </main>
           
            <Footer/>

        </>

    )
}


export default PaginaInicial