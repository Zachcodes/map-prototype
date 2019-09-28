export function initGeoLocation(setPosition) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail)
  } else {
    console.log('does not support geolocation')
  }
  function success(position) {
    console.log(position.coords)
    setPosition({
      zoom: 11,
      center: { lat: position.coords.latitude, lng: position.coords.longitude },
    })
  }
}

function fail() {
  // Could not obtain location
  console.log('could not obtain locations')
}
