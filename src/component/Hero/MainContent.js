import React, { Component } from "react";

export default class MainContent extends Component {

  render() {

    const arr1 = [
        {
            "one": "Lorem ipsum dolor sit amet consectetur adipisicing elit. At harum minus delectus temporibus consequatur molestias vel asperiores fuga expedita nesciunt?"
        },
        {
            "one": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, quidem. Ullam earum beatae rem deserunt oditlaboriosam vitae nihil facere."
        }
    ]

    const recentNews = arr1.map(a => {
        return <li key={a.one}><div className="test1"><p>{a.one}</p></div></li>
    });
    return (
      <div className="mainContent">
        <div className="welcome-text">
          <h2>Velkommen/እንኳን ደህና መጡ</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            nostrum soluta laboriosam non natus velit nihil animi quas
            inventore, dolores tempora magni, quod commodi reprehenderit. Est
            nam autem quaerat ducimus! ፡፡
          </p>
        </div>

        <div className="recent-news">
          <h3>Recent</h3>
          <ul>
              {recentNews}
          </ul>
        </div>
      </div>
    );
  }
}
