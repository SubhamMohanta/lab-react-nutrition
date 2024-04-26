import React, { useState } from 'react'
export default function FoodBox(props) {

    const [count, setCount] = useState(0)
    const [cals, setCals] = useState(0)
    return (
        <div id='full-box'>
            <div id='food'>
                <img src={props.img} alt="" />
                <div id='food-info'>
                    <div id='food-name'>{props.name}</div>
                    <div id='food-cal'>{props.cal} Calories</div>
                </div>
                <div id='nums'>
                    <input id='num-input' type="number" min={0} onChange={(e) => {
                        setCount(e.target.value)
                    }} />
                    <button id='plus-btn' onClick={() => {
                        setCals(count * (props.cal))
                    }}>+</button>
                </div>
            </div>
            <div id='reset'>
                <div id='count'>{props.name}*{count}</div>
                <div id='cals'>{cals} Calories</div>
                <button id='reset-btn' onClick={() => {
                    setCals(0)
                    setCount(0)
                }}>RESET</button>
            </div>
        </div>
    )
}