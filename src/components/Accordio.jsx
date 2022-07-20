import React, { useState } from 'react'

const Accordio = ({title,info}) => {
    const [show,setShow] = useState(false);
    const handleChangeAccordion = ()=>{
        console.log("click");
        setShow(!show);
    }
  return (
    <div className={show?"accordion":'accordion active'} onClick={handleChangeAccordion}>
          <div className="accordion-heading">
            <h3>{title}</h3>
            <i className="fas fa-angle-down"></i>
          </div>
          <p className="accordion-content">
            {info}
          </p>
    </div>
  )
}

export default Accordio