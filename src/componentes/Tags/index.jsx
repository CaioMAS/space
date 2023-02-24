import styles from "./Tags.module.scss";
import fotos from '../Galeria/fotos.json'

const Tags = ({tags, filtrarFotos, setItens}) => {
    return (
        <div className={styles.container}>
            <p>Encontre por tags:</p>
            <ul className={styles.lista}>
                {tags.map((tag) => {
                    return (
                        <li key={tag} className={styles.itens} onClick={() => filtrarFotos(tag)}>
                            {tag}
                        </li>
                    )
                })}
                <li onClick={()=>setItens(fotos)} className={styles.itens}>Todas</li>
            </ul>
        </div>
    )
}


export default Tags