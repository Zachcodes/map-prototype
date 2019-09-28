import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import { initGeoLocation } from '../utils/geoLocation'
import axios from 'axios'
const { REACT_APP_GOOGLE_MAPS_API } = process.env

const AnyReactComponent = ({ text }) => <div>{text}</div>

function SimpleMap() {
  const [position, setPosition] = useState({ zoom: 11 })
  const [coordinates, setCoordinates] = useState({})

  useEffect(() => {
    async function getCoordinates() {
      const { data } = await axios.get('/api/coordinates')
      setCoordinates(data)
    }
    getCoordinates()
  }, [])

  useEffect(() => {
    initGeoLocation(setPosition)
  }, [])

  if (!position.center) return <div>Loading....</div>

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAPS_API }}
        defaultCenter={position.center}
        defaultZoom={position.zoom}
      >
        {Object.keys(coordinates).length ? (
          <AnyReactComponent
            lat={coordinates.lat}
            lng={coordinates.lng}
            text={coordinates.description}
          />
        ) : null}
      </GoogleMapReact>
    </div>
  )
}

export default SimpleMap
