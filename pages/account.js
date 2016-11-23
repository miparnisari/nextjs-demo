import React from 'react'
import posts from '../data/posts'
import { style } from 'next/css'
import * as _ from 'lodash'

export default ({url: { query: {id}}}) => {
  const item = _.find(posts, { id: id })

  return (
    <div className={style(styles.main)}>
      <div className={style(styles.header)}>
        <h3>Characters</h3>
      </div>
      <div className={style(styles.panel)}>
        <h1 className={style(styles.heading)}>
          <b>Character:</b> {item.codeName} <br />
          <b>Real name:</b> {item.realName} <br />
          <b>Brief description:</b> <br />{item.story} <br />
        </h1>
      </div>
      <div className={style(styles.singlePhoto)}>
        <img src={item.display_src} alt={item.realName} width={500} height={500} />
      </div>
    </div>
  )
}

const styles = {
  main: {
    padding: '50px'
  },

  header: {
    font: '15px Segoe UI',
    textAlign: 'center'
  },

  panel: {
    float: 'right',
    marginRight: '140px',
    width: '300px'
  },

  singlePhoto: {
    border: '1px solid #999',
    width: '500px',
    height: '500px',
    float: 'left'
  },

  heading: {
    font: '15px Segoe UI'
  }
}