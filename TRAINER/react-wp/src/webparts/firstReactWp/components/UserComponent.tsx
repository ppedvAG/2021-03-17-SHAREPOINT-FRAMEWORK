import * as React from "react"

export const UserComponent = (props) => {
    return (
        <div>
            <p>Vorname: {props.user.firstName}</p>
            <p>NachName: {props.user.lastName}</p>
            <p>ID: {props.user.ID}</p>
        </div>
    )
    
}