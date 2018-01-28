import React from 'react'
import posts from '../data/posts'

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
        <div className='header'>
          <h3> Game of Thrones Characters </h3>
        </div>
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Real name</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.posts.map((post, i) => (
                <tr key={i}>
                  <td>{post.codeName}</td>
                  <td>
                    <Link href={`/account?id=${post.id}`}>
                      <a>{post.realName}</a>
                    </Link>
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