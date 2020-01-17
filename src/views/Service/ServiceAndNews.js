import React, { Component } from "react";
import Pic from "../../assets/placeholder.png";

import "./style.css";

export default class ServiceAndNews extends Component {
  render() {
    return (
      <div className="service-news-container">
        <div className="content">
          <div className="service-info">
            <div className="service-container">
              <Service />
            </div>
          </div>

          <div className="news-blog">
            <div className="news-container">
              <div className="title">
                <h1>NEWS</h1>
              </div>

              <News />
              <News />
              <News />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Service() {
  return (
    <>
      <div className="title">
        <h1>Service</h1>
      </div>
      <div className="service-desc">
        <img src={Pic} alt="some-person" />
        <div className="content-text">
          <p>
            ዘወትር ዕሑድ ከጠዋቱ 7 ሰአት ጀምሮ የቅዳሴ ሥነ ሥርዓት፣ የስብከትና የመዝሙር መርሃ ግብር በቤተ
            ክርሥቲያናችን (Caspar Storms vei 12, 0664 Oslo) ይካሄዳል፡፡ ምዕመናንና ምዕመናት
            በቦታውና በሰዓቱ በመገኘት የበረከቱ ተካፋይ እንድትሆኑ የደብሩ የሰበካ መንፈሳዊ አስተዳደር ጉባዔ በማክበር
            ይጋብዛል፡፡
          </p>
          <p>
            እንዲሁም ዘወትር ዕሑድ ከቅዳሴ በኋላ የሰንበት ት/ቤ ለህጻናት የቋንቋ፣ የመጽሃፍ ቅዱስና የመዝሙር ትምህርት
            በቤተ ክርሥቲያኑ ውስጥ ስለሚሰጥ ወላጆች ልጆቻችሁን በማምጣት እንድታሳትፉ የሰንበት ትምህርት ቤቱ በማክበር
            ይጠይቃል፡፡
          </p>
          <p> አድራሻ: Caspar Storms vei 12, 0664 Oslo</p>
        </div>
      </div>
    </>
  );
}

function News() {
  return (
    <>
      <div className="news-img">
        <img src={Pic} alt="news-text" />
      </div>

      <div className="news-text">
        <div className="news-title-date">
          <h3>Title</h3>
          <p>
            <small>date(Jan 28,2014)</small>
          </p>
        </div>
        <div className="news-desc">
          <p>
            This is a test text. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Molestiae, ex. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas, quam. Veritatis officiis aut
            adipisci magnam ipsum sed distinctio cumque deleniti alias deserunt
            iusto, ex ipsa quaerat voluptas accusamus labore quos dolorum
            praesentium omnis nemo. Quidem sit molestias harum iusto explicabo
            iste laudantium, odit accusamus quod dolores dolor necessitatibus,
            quis magnam.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
            voluptas mollitia maiores doloribus impedit, ab explicabo quo
            possimus minima odio? This is a test text. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Molestiae, ex. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptas, quam. Veritatis
            officiis aut adipisci magnam ipsum sed distinctio cumque deleniti
            alias deserunt iusto, ex ipsa quaerat voluptas accusamus labore quos
            dolorum praesentium omnis nemo. Quidem sit molestias harum iusto
            explicabo iste laudantium, odit accusamus quod dolores dolor
            necessitatibus, quis magnam.
          </p>
        </div>
      </div>
    </>
  );
}
