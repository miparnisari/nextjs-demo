import React from 'react'
import posts from '../data/posts'
import * as _ from 'lodash'

export default ({url: { query: {id}}}) => {
  const item = _.find(posts, { id: id })

  return (
    <div className='main'>
      <div className='header'>
        <h3>Characters</h3>
      </div>
      <div className='panel'>
        <h1 className='heading'>
          <b>Character:</b> {item.codeName} <br />
          <b>Real name:</b> {item.realName} <br />
          <b>Brief description:</b> <br />{item.story} <br />
        </h1>
      </div>
      <div className='singlePhoto'>
        <img src={item.display_src} alt={item.realName} width={500} height={500} />
      </div>
    </div>
  )
}