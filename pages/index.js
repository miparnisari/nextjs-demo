import React from 'react'
import posts from '../data/posts'

// function to style properties
import { style } from 'next/css'

// client side transitions
import Link from 'next/link'

// every route within Next.js is a module that exports a function or class 
// extending from React.Component

export default class extends React.Component {
  static getInitialProps() {
    return { posts: posts }
  }

  render() {
    return (
      <div>
        <div className={style(styles.header)}>
          <h3> Game of Thrones Characters </h3>
        </div>
        <table className={style(styles.table)}>
          <thead>
            <tr>
              <th className={style(styles.th)}>Character</th>
              <th className={style(styles.th)}>Real name</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.posts.map((post, i) => (
                <tr key={i}>
                  <td className={style(styles.td)}>{post.codeName}</td>
                  <td className={style(styles.td)}>
                    <Link href={`/account?id=${post.id}`}>{post.realName}</Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const styles = {
  th: {
    background: '#00cccc',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '12px',
    padding: '12px 35px',
  },

  header: {
    font: '15px Segoe UI',
    textAlign: 'center'
  },

  table: {
    fontFamily: 'Segoe UI',
    margin: '25px auto',
    borderCollapse: 'collapse',
    border: '1px solid #eee',
    borderBottom: '2px solid #00cccc'
  },

  td: {
    color: '#999',
    border: '1px solid #eee',
    padding: '12px 35px',
    borderCollapse: 'collapse'
  },

  list: {
    padding: '50px',
    textAlign: 'center'
  },

  photo: {
    display: 'inline-block'
  },

  photoLink: {
    color: '#333',
    verticalAlign: 'middle',
    cursor: 'pointer',
    background: '#eee',
    display: 'inline-block',
    width: '250px',
    height: '250px',
    lineHeight: '250px',
    margin: '10px',
    border: '2px solid transparent',
    ':hover': {
      borderColor: 'blue'
    }
  }
}