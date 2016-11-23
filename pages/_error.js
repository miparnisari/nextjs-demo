import React from 'react'

export default class Error extends React.Component {
  static getInitialProps({res, xhr}) {
    const errorCode = res ? res.statusCode : xhr.status
    return { errorCode }
  }

  render() {
    return (
      <div>
        <h1>Oh no!</h1>
        <p>An error {this.props.errorCode} just occurred.</p>
      </div>
    )
  }
}