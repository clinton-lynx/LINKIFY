import React from 'react'
import '../asset/styles/components/form.scss';

const InputCard = () => {
  return (
    <div className='form-wrapper'>
        <form action="" className="form">
            <input type="text" className="input-text" />
            <span className="plus">+</span>
        </form>
        <hr/>
    </div>
  )
}

export default InputCard