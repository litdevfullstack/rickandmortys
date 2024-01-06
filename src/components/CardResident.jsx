import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/CardResident.css'
const CardResident = ({ url }) => {

    const [resident, getResident] = useFetch(url)

    useEffect(() => {
        getResident()
    }, [])

    return (
        <section className="resident">
            <header className="resident__header">
                <img className="resident__iamge" src={resident?.image} alt="" />
                <div className="resident__status">
                    <div className={`resident__status__circle ${resident?.status}`}></div>
                    <span className="resident__status-value">{resident?.status}</span>
                </div> 
            </header>
            <article className="resident__body">
                <h3 className="resident__name">{resident?.name}</h3>
                <hr  className="resident__separator"/>
              <ul className="resident__stats">
              <li><span className="resident__stat__item">Specie: </span><span className="resident__stat__label">{resident?.species}</span></li>
              <li><span className="resident__stat__item">Origin: </span><span className="resident__stat__label">{resident?.origin.name}</span></li>
              <li><span className="resident__stat__item">Eppisodes where appear: </span><span className="resident__stat__label">{resident?.episode.length}</span></li>
              </ul>
            </article>
        </section>
    )
}

export default CardResident