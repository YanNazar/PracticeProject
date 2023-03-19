import "./TestimonialCard.css"

const TestimonialCard = (props) => {
    const firstPosition = "rectangle firstPosition " + props.color;
    const secondPosition = "rectangle secondPosition " + props.color;
    return(
        <div className="personalCard">
            <div className={firstPosition}></div>
            <div className={secondPosition}></div>
            <img src={props.image} alt={props.name}/>
            <p>{props.text}</p>
            <h1>{props.name}</h1>
            <h2>{props.enterprise}</h2>
        </div>
    );
}

export default TestimonialCard;