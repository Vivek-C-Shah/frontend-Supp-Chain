import React from 'react'
import '../styles/chainnode.css'

const ChainNode = (props) => {
    const img = 'https://cdn-icons-png.flaticon.com/512/99/99061.png';
  return (
    <div className='chain-node'>
        <div className="chain-node-media">{props.img}</div>
        <div className="chain-node-text">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default ChainNode