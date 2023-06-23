import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
        <div className="skills">
            <div className="section">
            <div className="section-content">
              <h1>My Skills</h1>
            <p>All of my skills that I have acquired</p>
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
        <div className="text-content">
          <div className="title">
            <h1>My Skillset</h1>
          </div>
          <div className="content">
            <p>Over the following years of being in IT, I have acquired the following skills:</p>
            <br />
            <ul>
                <li>HTML</li>
            </ul>
            <ul>
                <li>Javascript</li>
            </ul>
            <ul>
                <li>C++</li>
            </ul>
            <ul>
                <li>C#</li>
            </ul>
            <ul>
                <li>Unreal Engine 4 and 5</li>
            </ul>
            <ul>
                <li>Reverse Engineering</li>
            </ul>
            <ul>
                <li>Digital Audio</li>
            </ul>
            <ul>
                <li>Active Directory</li>
            </ul>
            <ul>
                <li>Azure</li>
            </ul>
            <ul>
                <li>Google Cloud Platform</li>
            </ul>
            <ul>
                <li>Firebase</li>
            </ul>
            <ul>
                <li>PHP</li>
            </ul>
            <ul>
                <li>Networking</li>
            </ul>
            <ul>
                <li>MYSQL</li>
            </ul>
            <br />
            <p>I am currently looking for new opportunities to learn and expand my skillset.</p>
            <br />
            <p>If you have any questions, please feel free to contact me over at: <a href="mailto:jd@kalicloud.dev" className='link'>jd@kalicloud.dev</a></p>
            <br />
            <p>Alternativly you may grab references and view my work at: <a href="/resources" className='link'>Resources</a></p>
        </div>
    </div>
</div>
    )
  }
}
