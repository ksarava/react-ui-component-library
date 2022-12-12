import React from "react";

interface VehicleProps {
    vehicleIcon?: any;
    name: string;
}

const Vehicle = (props: VehicleProps) => {
    return (
        <div className="d-flex flex-column">
            <span>{props.vehicleIcon}</span>
      <span className="truncate-text" title={props.name}>
        {props.name}
      </span>
    </div>
    )
}

export default Vehicle; 