import React from 'react'
import uncheck from '../assets/uncheck.svg'
import check from '../assets/check.svg'


const Checkbox = ( {checked = false, onClick}) => {
  return (
    <div onClick={onClick}>
        {!checked && <img className='checkbox unchecked' src={uncheck}/>}
        { checked && <img  className='checkbox checked' src={check}/>}
    </div>
  )
}

export default Checkbox