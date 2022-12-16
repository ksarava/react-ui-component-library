import React from 'react'
const truck = require("../assets/Images/truck.svg") as string;
const location = require("../assets/Images/location.svg") as string;
const driver = require("../assets/Images/driver.svg") as string;
const mileage = require("../assets/Images/mileage.svg") as string;
const speed = require("../assets/Images/speed.svg") as string;
const fuel = require("../assets/Images/fuel.svg") as string;



interface IVehicle {
    name?: string;
    location?: string;
    mileage?: string;
    fuel?: string;
    driver?: string;
    speed?: string;


  }

const Vehicle = (props: IVehicle) => {
    return(
      <div style={{ width: "22rem", padding: "0.5rem" }} className="shadow">
      <div className="d-flex flex-column">
        <h4>{"Vehicle - Test name"}</h4>

        <div className="d-flex flex-row p-1">
          { props?.name && <div style={{ width: "7rem" }} className="shadow p-1 m-1">
            <span className="h6"> {"Vehicle name"} </span>
            <img src={truck}/>
            <p>{props.name}</p>
          </div>}
         { props?.location && <div style={{ width: "7rem" }} className="shadow p-1 m-1">
         <span className="h6"> {"Current location"} </span>
            <img src={location}/>
            <p>{props.location}</p>
          </div>}
          { props?.mileage && <div style={{ width: "7rem" }} className="shadow p-1 m-1">
         <span className="h6"> {"Mileage"} </span>
            <img src={mileage}/>
            <p>{props.mileage}</p>
          </div>}
        </div>

        <div className="d-flex flex-row p-1">
        { props?.fuel && <div style={{ width: "7rem" }} className="shadow p-1 m-1">
         <span className="h6"> {"Mileage"} </span>
            <img src={fuel}/>
            <p>{props.fuel}</p>
          </div>}
          { props?.driver && <div style={{ width: "7rem" }} className="shadow p-1 m-1">
         <span className="h6"> {"Mileage"} </span>
            <img src={driver}/>
            <p>{props.driver}</p>
          </div>}
          { props?.speed && <div style={{ width: "7rem" }} className="shadow p-1 m-1">
         <span className="h6"> {"Mileage"} </span>
            <img src={speed}/>
            <p>{props.speed}</p>
          </div>}
        </div>
      </div>
    </div>
    )
}

export default Vehicle;