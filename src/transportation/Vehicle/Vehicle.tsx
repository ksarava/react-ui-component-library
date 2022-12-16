import React from 'react'


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
      <div className='d-flex flex-column'>
        <div>{props?.name}</div>
        <div>{props?.location}</div>
      </div>
    )
}

export default Vehicle;