import React from 'react'

const page = ({ params }:{params:{name:string}}) => {
  return (
    <div>
      <p>{params.name}</p>
    </div>
  )
}

export default page