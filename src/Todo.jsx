import React from 'react'
import List from "./List"

function Todo() {
    return (
        <>
            <h1>To do Lists
            </h1>
            <h2>Today</h2>
            <List arr={["walk","cook","bake"]} />
            <h2>Tommorow</h2>
            <List arr={["Study","code","Eat"]}/>

        </>
    )
}

export default Todo