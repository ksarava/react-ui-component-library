import React from 'react'

interface IVehicle {
    name: string;
    icon?: JSX.Element;
  }

const Vehicle = (props: IVehicle) => {
    return(
    <div className="d-flex flex-column">
      <span>
        {props.icon}
      </span>
      <span title={props.name}>
        {props.name}
      </span>
    </div>
    )
}

export default Vehicle;