import React from 'react'
import Card from './Card'

const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const CardList = ({data}) => {
  return (
    <div  className = ' grid grid-cols-1 md:grid-cols-4 gap-4 sm:grid-cols-2  md:max-w-5xl mx-auto place-items-center' >
        {
            data.length>0 && data.map(x=>(
                <Card key={x.id} data={x}/>
            ))
        }
        
    </div>
  )
}

export default CardList