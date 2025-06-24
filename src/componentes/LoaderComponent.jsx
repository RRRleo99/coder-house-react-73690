import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoaderComponent = () => {
  return (
    <div style={{width:"100%",justifyContent:"center", alignItems:"center"}}>
    <Spinner animation="grow" variant="success" />
    </div>
  )
}

export default LoaderComponent