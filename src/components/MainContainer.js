import { useRef, useState } from 'react'
import { Autocomplete } from "@react-google-maps/api"
import { FaMapMarkerAlt } from "react-icons/fa";

import Map from './Map'


export default function Form() {
    /* global google */

    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destiantionRef = useRef()


    async function calculateRoute() {
        if (originRef.current.value === '' || destiantionRef.current.value === '') {
            return
        }

        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: originRef.current.value,
            destination: destiantionRef.current.value,
            travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
    }

    return (
        <div className='mainContainer'>
            <div className='form'>
                <div className='mainForm'>
                    <div className='formInput' >
                        <p>Origin</p>
                        <FaMapMarkerAlt />
                        <span>
                            <Autocomplete>
                                <input type='text' placeholder='Origin' ref={originRef} />
                            </Autocomplete>
                        </span>
                        <p>Destination</p>
                        <FaMapMarkerAlt />
                        <span>
                            <Autocomplete>
                                <input type='text' placeholder='Destination' ref={destiantionRef} />
                            </Autocomplete>
                        </span>
                    </div>
                    <div className='button'>
                        <button onClick={calculateRoute} >Calculate</button>
                    </div>
                </div>
                <div>
                    <div className='distance'>
                        <p>Distance</p>
                        <p><b>{distance}</b></p>
                    </div>
                    <div>
                        <p>The distance between <b>{ }</b> and <b>{ }</b> is <b>{distance}.</b></p>
                    </div>
                </div>
            </div>
            <Map response={directionsResponse} />
        </div>
    )
}