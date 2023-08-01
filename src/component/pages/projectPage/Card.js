import React from "react"
import { Link } from "react-router-dom"

const Card = (props) => {
  return (
    <>
      <div className='box btn_shadow text-center px'>
        <img className='proImg' src={props.image} alt='' />
        <h2 className="proTitle">{props.title}</h2>
        {/* <p>{props.desc}</p> */}
        <Link className="btn" to={props.to}>
          Check Now <i className='fas fa-arrow-right'></i>
        </Link>
      </div>
    </>
  )
}

export default Card
