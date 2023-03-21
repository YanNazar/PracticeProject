import "./ProcessBody.css";
import ProcessCard from "../ProcessCard/ProcessCard";


function ProcessBody(){
    return (
        <div className="processBody">
            
            <div className="processText">
                <h2>Process</h2>
                <h1>Air is a full service creative agency</h1>
                <p>
                    Deep analytics, strong strategy 
                    and bright creative ideas.
                </p>
                <p>
                    We are sure that first-rate job is 
                    possible only if all three components are united.
                </p>
            </div>

            <div className="processCards">
                <ProcessCard 
                    number="001" 
                    backgroundColor="cardBlue" 
                    color="numberBlue"
                    text="Brand Development
                    Copywriting
                    Logo & Webite Design
                    Packaging"
                    position="firstPositionCard"
                    />
                <ProcessCard 
                    number="002" 
                    backgroundColor="cardGreen" 
                    color="numberGreen"
                    text="Brand Development
                    Copywriting
                    Logo & Webite Design
                    Packaging"
                    position="secondPositionCard"
                    />
                <ProcessCard 
                    number="003" 
                    backgroundColor="cardYellow" 
                    color="numberYellow"
                    text="Brand Development
                    Copywriting
                    Logo & Webite Design
                    Packaging"
                    position="thirdPositionCard"
                    />
                <ProcessCard 
                    number="004" 
                    backgroundColor="cardRed" 
                    color="numberRed"
                    text="Brand Development
                    Copywriting
                    Logo & Webite Design
                    Packaging"
                    position="fourthPositionCard"
                    />
            </div>
        </div>
    );
}

export default ProcessBody;