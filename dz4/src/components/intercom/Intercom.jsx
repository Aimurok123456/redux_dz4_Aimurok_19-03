import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getValue } from '../../redux/actions'
import Button from '../ui/Button'
import InputValue from '../ui/InputValue'

function Intercom() {
  const { btnArr } = useSelector(state => state)
    const dispatch=useDispatch()
    const handleClick=({target})=>{
        dispatch(getValue(target.innerText))
    }
  return (
    <div className='intercom'>
        <InputValue/>
      <div className="interBtn">
        {btnArr.map(item => (
          <Button key={item} onClick={handleClick}>{item}</Button>
        ))}
      </div>
    </div>
  )
}

export default Intercom
