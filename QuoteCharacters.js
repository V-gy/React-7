import React from "react";


function QuoteCharacters({characters}){
    return (
        <div classeName="QuoteCard">
            <img
                src={characters.image}
                alt={characters.character}
            />
            <ul>
                <li>{characters.quote}</li>
                <li>{characters.character}</li>
                <li>{characters.characterDirection}</li>
            </ul>
        </div>
    )
}



export default QuoteCharacters
