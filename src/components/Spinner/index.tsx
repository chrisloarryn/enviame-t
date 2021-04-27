import React from 'react'
import './styles.css'

const Spinner: React.FC = () => (
  <div className='lds-ring'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
)

export default Spinner
