import "./TestimonialCard.css"
import classNames from 'classNames';

const TestimonialCard = (props) => {
    return(
        <div>
            <div className={classNames('rectangle', 'firstPosition', props.color)}></div>
            <div className={classNames('rectangle', 'secondPosition', props.color)}></div>
            <p>{props.text}</p>
            <name>{props.name}</name>
            <enterprise>{props.enterprise}</enterprise>
        </div>
    );
}

export default TestimonialCard;