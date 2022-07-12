import React from 'react'

function List({arr}) {

    
    return (
        
        <p>
            {arr.map((item)=> item ).join(", ")}
        </p>
    )
}

export default List