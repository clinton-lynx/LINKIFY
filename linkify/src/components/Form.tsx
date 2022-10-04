import React, { ReactEventHandler, useState } from 'react'
import '../asset/styles/components/form.scss';

const Form = ({addLinks}: any) => {
  const inputEl  = document.querySelector('.input-text') as HTMLInputElement;
  const [link, setLink] = useState({
    id: 1,
    link: '',
  })
  const handleSubmit = (e:any) =>{
    e.preventDefault();
    if(inputEl.value.trim()){
      addLinks(link)
      setLink({...link, link: ''})
      

    }
    
  }
  const handleInput =(e:any) =>{
    setLink({...link, link: e.target.value})
  }
  return (
    <div className='form-wrapper'>
        <form action="" className="form">
            <input 
            value={link.link}
            onChange={handleInput}
            type="url"
            placeholder="https://example.com"
            pattern="https://.*" 
            required 
            className="input-text" />
            <button type='submit' onClick={handleSubmit}  className="plus">+</button>
        </form>
         <div className="save-btn-wrapper"><button type='submit' onClick={handleSubmit} className='save-btn'>save current tab</button></div>
        <hr/>
    </div>
  )
}

export default Form;