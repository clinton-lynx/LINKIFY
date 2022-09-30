import React from 'react'
import '../asset/styles/components/form.scss';

const InputCard = () => {
  return (
    <div className='form-wrapper'>
        <form action="" className="form">
            <input type="text" className="input-text" />
            <span className="plus">+</span>
        </form>
         <div className="save-btn-wrapper"><button className='save-btn'>save current tab</button></div>
        <hr/>
    </div>
  )
}

export default InputCard