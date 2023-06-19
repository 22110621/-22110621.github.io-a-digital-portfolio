import React, { Component } from "react";

export default class Cloud extends Component {
  render() {
    return (
      <div className="cloud">
        <div className="section">
          <div className="section-content">
            <h1>The Cloud</h1>
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
            <h1>How I want to make an impact in the cloud</h1>
          </div>
          <div className="content">
            <p>
              The cloud is amazing in its own way, being able to collaberate
              with others in real time accross the world is just amazing but
              what if I told you that cloud technolegy could be even more
              accessable and available to people?
            </p>
            <br />
            <p>
              Truth be told the cloud is a baby, its only the beginning into a
              generation of technolegy that was unheared of 20 years ago. This
              where{" "}
              <a className="link" href="/projects/cloud">
                Kali Cloud
              </a>{" "}
              Comes into place, Kali Cloud is built on the essense of making the
              cloud more accessable and easier to manage. This is why I am
              dedicating resources into developing the cloud even further,
              introducing easier than ever IT infrastructure without a complex
              cloud platform to navigate. I am going to invest in this
              technolegy and work with it to create even better cloud technolegy.              
            </p>
            <br />
            <h3>What does the future hold?</h3>
          </div>
        </div>
      </div>
    );
  }
}
