//** Libraries */
import { useState } from "react";

const dataLocationGeneral =
{
    positions: []
}

const SectionLocation = () => {
    const [dataLocation, setDataLocation] = useState(dataLocationGeneral);
   // console.log(dataLocation.positions.length);
    const onClickAction = () => {
        console.log(dataLocation.positions);
        if ("geolocation" in navigator) {
            const getNavigacion = () => {
                navigator.geolocation.getCurrentPosition((position) => {
                    let dataTemp = Object.assign({}, dataLocation);

                    let latitud = position.coords.latitude;
                    let longitud = position.coords.longitude;

                    dataTemp.positions.push({'latitud' : latitud, 'longitud' : longitud});
                   
                    setDataLocation(dataTemp);
                });
            }

         getNavigacion();
        } else {
            alert("La geolocation no esta activo");
        }
    }
    return (
        <div>
            {
                dataLocation.positions.length ?
                    (dataLocation.positions.map(element => {
                        return (<p>{`Latitud: ${element.latitud} --- Longitud ${element.longitud}`}</p>)
                    })) : 
                    ''
            }
            <button onClick={onClickAction}>LOCATION NOW</button>
        </div>
    )
}

export default SectionLocation;