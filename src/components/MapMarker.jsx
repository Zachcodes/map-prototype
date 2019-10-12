import React from 'react'
import styled from 'styled-components'
import Marker from '../img/map-marker.png'

const Pin = styled.div`
  background-image: url('${Marker}');
  height: 100px;
  width: 100px;
  background-size: 100%;
`

const MapMarker = ({ description }) => {
  return <Pin>{description}</Pin>
}

export default MapMarker
