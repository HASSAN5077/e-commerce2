import React from 'react'
import Accordio from './Accordio'
import Title from './Title'

const Faq = () => {
  const data = [
    {
      id:1,
      title:'how to make websites?',
      info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,laboriosam non eligendi reiciendis quis laborum exercitationem voluptatibus autem harum nihil nisi sed mollitia, quam blanditiis architecto cumque? Sit, voluptate maiores."
    },
    {
      id:2,
      title:'how to place order online?',
      info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,laboriosam non eligendi reiciendis quis laborum exercitationem voluptatibus autem harum nihil nisi sed mollitia, quam blanditiis architecto cumque? Sit, voluptate maiores."
    },
    {
      id:3,
      title:'how to pay online?',
      info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,laboriosam non eligendi reiciendis quis laborum exercitationem voluptatibus autem harum nihil nisi sed mollitia, quam blanditiis architecto cumque? Sit, voluptate maiores."
    },
    {
      id:4,
      title:'is online payment safe?',
      info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,laboriosam non eligendi reiciendis quis laborum exercitationem voluptatibus autem harum nihil nisi sed mollitia, quam blanditiis architecto cumque? Sit, voluptate maiores."
    },
    {
      id:5,
      title:'how to contact service center?',
      info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus,laboriosam non eligendi reiciendis quis laborum exercitationem voluptatibus autem harum nihil nisi sed mollitia, quam blanditiis architecto cumque? Sit, voluptate maiores."
    }
  ]
  return (
    <section className='faq'>
        <Title simple='questions &' fancy='answers'/>
        <div className="accordion-container">
          {data.map(item=>{
            return <Accordio key={data.id} {...item}/>
          })}
        </div>
    </section>
  )
}

export default Faq