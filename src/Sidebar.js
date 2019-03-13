import React from 'react'

const sidebar = ({toggleSidebar}) => {
    return(
        <div className="sidebar">
            <p>sidebar</p>
            <ul>
                <li> <a href="#">Home</a> </li>
                <li> <a href="#">About</a> </li>
                <li> <a href="#">Portfolio</a> </li>
                <li> <a href="#">Contact</a> </li>
            </ul>
            <button className="btn" onClick={toggleSidebar}>Hide</button>
        </div>
    )
}

export default sidebar