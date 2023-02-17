//** Libraries */
import { useState } from "react";

const dataLocationGeneral =
{
    latitud: null,
    longitud: null
}

const SectionLocation = () => {
    const [dataLocation, setDataLocation] = useState(dataLocationGeneral);

    const onClickAction = () => {
        if ("geolocation" in navigator) {
            const getNavigacion = () => {
                navigator.geolocation.getCurrentPosition((position) => {
                    let dataTemp = Object.assign({}, dataLocation);
                    dataTemp.latitud = position.coords.latitude;
                    dataTemp.longitud = position.coords.longitude;
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
                (dataLocation.latitud !== null && dataLocation.longitud !== null) ? 
                    <p>{`Latitud: ${dataLocation.latitud} --- Longitud ${dataLocation.longitud}`}</p> : 
                    <p>No se tiene información de geolocalización.</p>
            }
            <button onClick={onClickAction}>LOCATION NOW</button>
        </div>
    )
}

export default SectionLocation;