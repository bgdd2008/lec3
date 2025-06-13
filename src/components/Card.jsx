import React from 'react'

export default function Card({title='Card title',content='Card content' , img = '/assets/pic.jpg'}) {
  return (
    <div className="card">
        <h1>{title}</h1>
        <p>{content}</p>
        <img src={img} alt={img} width={150} height={150} />
      </div>
  )
}
