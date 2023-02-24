import open from "./open.png"
import favorito from "./favorito.png"

const Cards = ({itens, styles}) => {
    return (
        <ul className={styles.lista}>
            {itens.map((item) => {
                return (
                    <li key={item.id} className={styles.card}>
                        <img
                            className={styles.imagem}
                            src={item.imagem}
                            alt={item.titulo}
                        />
                        <p className={styles.descricao}>{item.titulo}</p>
                        <div className={styles.div}>
                            <p>{item.creditos}</p>
                            <span>
                                <img src={favorito} alt="ícone coração de curtir" />
                                <img src={open} alt="ícone de abrir modal" />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}


export default Cards