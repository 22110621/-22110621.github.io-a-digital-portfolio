import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <div className="section">
          <div className="section-content">
            <h1>My Experience</h1>
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
        <div className="experience-list">
          <div className="ocupation card">
            <div className="ocupation-dates">2017 - 2022</div>
            <div className="ocupation-title">Ysgol Bryn Alyn - Highschool</div>
            <div className="ocupation-workplace">
              <FontAwesomeIcon icon={faLocationDot} /> Ysgol Bryn Alyn
            </div>
            <div className="ocupation-detal">
              <p>Studied at Ysgol Bryn Alyn</p>
            </div>
          </div>
          <div className="ocupation card">
            <div className="ocupation-dates">2022 - 2023</div>
            <div className="ocupation-title">Btec Level 2 - Coleg Cambria</div>
            <div className="ocupation-workplace">
              <FontAwesomeIcon icon={faLocationDot} /> Coleg Cambria
            </div>
            <div className="ocupation-detal">
              <p>
                Studied Btec level 2 Information and Technolegy at Colleg
                Cambria
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
