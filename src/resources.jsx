import React, { Component } from 'react'

export default class ResourcePage extends Component {
  render() {
    return (
      <div className="resources">
        <div className="section">
          <div className="section-content">
            <h1>Resources used on this portfolio</h1>
            <p>View all resources and references below</p>
          </div>
          <div className="bubbles">
            <div className="bubble large" />
            <div className="bubble large" />
            <div className="bubble small" />
            <div className="bubble small" />
            <div className="bubble large" />
            <div className="bubble large" />
            <div className="bubble large" />
            <div className="bubble small" />
            <div className="bubble small" />
          </div>
        </div>
      </div>
    )
  }
}
