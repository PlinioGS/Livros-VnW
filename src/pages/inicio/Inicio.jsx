import s from './inicio.module.scss'
import Main from '../../Components/main/Main'

export default function Inicio(){
    return(
        <main>
            <section className={s.mainImage}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <Main/>
        </main>
    )
}