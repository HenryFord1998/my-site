import { useState } from "react";
import Card from "../cards";
import cardData from "./../../cardData"





function GeneratedCards(props){

    
    const [filtered, setFiltered] = useState(cardData);
    
   
   const filter = (button) => {
    if (button === "all") {
        setFiltered(cardData)
    } else {
        const filteredData = cardData.filter(cardData => cardData.category === button);
        setFiltered(filteredData)
    }
    
   }



   

   

   
    return (
    
    <div>
        <div className={props.filterIcon}>
        <button type="button" className="flat-button-filter" onClick={()=> filter("all")} >All</button>
        <button type="button" className="flat-button-filter" onClick={()=> filter("design")} >Design</button>
        <button type="button" className="flat-button-filter" onClick={()=> filter("front-end")} >Front-End</button>
        <button type="button" className="flat-button-filter" onClick={()=> filter("back-end")} >Back-End</button>
        </div>
        
        <div className="card-space">
        {/* map through cardData nased on filter and generate cards */}
        {filtered.map(function createCard(card) {
           return (
           <Card 
            key={card.id} 
            title={card.title} 
            content={card.description}
            pageUrl={card.pageUrl}
            imgUrl={card.imgUrl}
            modalValue={props.id}
            value={card.id}
            mouseOver={props.mouse}
            />
            )
            })}

        </div>
        
            
    </div>
)}

export default GeneratedCards;