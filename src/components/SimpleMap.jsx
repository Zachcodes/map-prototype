import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import { initGeoLocation } from '../utils/geoLocation'
import axios from 'axios'
import MapMarker from './MapMarker'
const { REACT_APP_GOOGLE_MAPS_API } = process.env

const AnyReactComponent = ({ text }) => <div>{text}</div>
const handleClick = e => {
  console.log(e)
}

function SimpleMap() {
  const [position, setPosition] = useState({ zoom: 11 })
  const [coordinates, setCoordinates] = useState({})
  const [maps, setMaps] = useState({})
  const [map, setMap] = useState({})

  useEffect(() => {
    async function getCoordinates() {
      const { data } = await axios.get('/api/coordinates')
      setCoordinates(data)
      console.log(maps)
      // data.forEach(
      //   c => new maps.Marker({ position: { lat: c.lat, lng: c.lng }, map })
      // )
    }
    getCoordinates()
  }, [])

  useEffect(() => {
    initGeoLocation(setPosition)
  }, [])

  const handleMapLoad = (map, maps) => {
    setMaps(maps)
    setMap(map)
    coordinates.forEach(
      c =>
        new maps.Marker({
          position: { lat: Number(c.lat), lng: Number(c.lng) },
          map,
          title: c.name,
        })
    )
  }

  if (!position.center) return <div>Loading....</div>

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAPS_API }}
        defaultCenter={position.center}
        defaultZoom={position.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleMapLoad(map, maps)}
        onClick={handleClick}
      >
        {/* {Object.keys(coordinates).length
          ? coordinates.map(c => (
              <MapMarker lat={c.lat} lng={c.lng} description={c.description} />
            ))
          : null} */}
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap
