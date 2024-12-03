import style from './Card.module.css'
import Button from './../../buttons/button'
import Tags from '../../Tags/Tags'
import placeholderImage from '/src/assets/placeholder.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'


function Card({ callback, title = '', tags, content = '', image }) {




    return (
        <div className={style.card}>
            <figure className={style.figure}>
                <img className={style.image} src={image ? image : placeholderImage} alt="" />
            </figure>
            <div className={style.body}>
                <h3>
                    {title}
                </h3>
                <Tags tags={tags} />
                <p className={style.description}>
                    {content}
                </p>
                <div className={style.down_buttons}>
                    <Button />
                    <button className={style.btn} onClick={callback}>Elimina</button>
                </div>
            </div>
        </div>
    )
}

export default Card