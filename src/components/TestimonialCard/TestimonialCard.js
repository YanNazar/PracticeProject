import "./TestimonialCard.css"

const TestimonialCard = (props) => {
    const firstPosition = "rectangle firstPosition " + props.color;
    const secondPosition = "rectangle secondPosition " + props.color;
    return(
        <div className="personalCard">
            <img src={props.image} alt={props.name}/>
            <div className={firstPosition}></div>
            <div className={secondPosition}></div>
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={props.color} d="M0 18.48C0 17.36 0 16.24 0 15.12C0 
                13.9533 0 12.81 0 11.69C0 8.09667 0.513333 5.27334 1.54 3.22C2.56667 
                1.16667 4.36333 0.0933349 6.93 0L8.26 2.73C6.81333 2.87 5.81 3.57 5.25 
                4.83C4.73667 6.04333 4.48 7.98 4.48 10.64H8.19V18.48H0ZM12.32 18.48C12.32 17.36 
                12.32 16.24 12.32 15.12C12.32 13.9533 12.32 12.81 12.32 
                11.69C12.32 8.09667 12.8333 5.27334 13.86 3.22C14.8867 
                1.16667 16.6833 0.0933349 19.25 0L20.58 2.73C19.1333 2.87 
                18.13 3.57 17.57 4.83C17.0567 6.04333 16.8 7.98 16.8 10.64H20.51V18.48H12.32Z"/>
            </svg>
            <p>{props.text}</p>
            <h1>{props.name}</h1>
            <h2>{props.enterprise}</h2>
        </div>
    );
}

export default TestimonialCard;