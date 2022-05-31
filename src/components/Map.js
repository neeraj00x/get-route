import { useJsApiLoader, GoogleMap, DirectionsRenderer } from '@react-google-maps/api'
import { useState } from 'react'

const center = { lat: 28.7041, lng: 77.1025 }
const libraries = ['places']

function Map(props) {
    // /* global google */
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyC7pyg2XfsHis1DNOlMrCB-nx41-a49qJ0',
        libraries: libraries,
    })

    const [map, setMap] = useState(/** @type google.maps.Map */(null))
    const directionsResponse = props.response


    if (!isLoaded) {
        // return <SkeletonText />
    }

    return (
        <div className='map'>
            <GoogleMap
                center={center}
                zoom={15}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
                onLoad={map => setMap(map)}
            >
                {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                )}
            </GoogleMap>
        </div>
    )
}

export default Map
