import "./ProcessCard.css";
import Arrow from "../../assets/Arrow.svg";

const ProcessCard = (props) => {
    return (
        <div className={"processCard " + props.position}>
            
            <div className="numberContainer">
                <div className={"numberBox " + props.backgroundColor}/>
                <p className={"number " + props.color}>
                    {props.number}
                </p>
            </div>
            
            <p className="processCardText">{props.text}</p>
            
            <div className="processButtonContainer">
                <button 
                    className={"processButton " 
                    + props.backgroundColor}>

                        <img src={Arrow} alt=">"/>
                </button>
                <h1>Learn more</h1>
            </div>

        </div>
    );
}

export default ProcessCard;