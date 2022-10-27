import React from "react";

export default function Row({ guess, solution }) {

    if (guess) {
        return (
            <div className="row past">
                {guess.map((l, i) => (
                    <div key={i} className={l.color}>{l.key}</div>
                ))}
            </div>
        )
    }
    
    const boxes = Array.from({length: solution.length}, (_, index) => index)
    return (
        <div className="row">
            {boxes.map(i => <div key={i}></div>)}
        </div>
    )   

}