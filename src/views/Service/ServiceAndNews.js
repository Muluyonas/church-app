import React, { useState, useEffect } from "react";
import Pic from "../../assets/placeholder.png";
import sanityClient from "../../client.js";
import { formatDate } from "../../utils/dateFormatter";

import "./style.css";

export default function ServiceAndNews() {
  const [posts, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        body,
        title,
        slug,
        mainImage{
          asset->{_id,url}
        },
        publishedAt
      }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  if (!posts) {
    return <h1>Loading....</h1>;
  } else {
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

              {posts.map((post) => {
                return <News key={post.title} post={post} />;
              })}

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

function News({ post }) {
  if(post){
      return (
    <>
      <div className="news-img">
       {
         post.mainImage ? <img src={post.mainImage.asset.url} alt="news-text" /> : 
         <img src={Pic} alt="some-person" />
       }
        
      </div>

      <div className="news-text">
        <div className="news-title-date">
          <h3>{post ? post.title :'No title'}</h3>
          <p>
            <small>{formatDate(post.publishedAt.slice(0,10))}</small>
          </p>
        </div>
        <div className="news-desc">
         {
           post.body.map(text => {
             console.log(text.children)
             return (
               <p key={text._key}>
                {text.children[0].text}
               </p>
             )
           } )
         }
        </div>
      </div>
    </>
  );
  }else{
    return <div />;
  }

}
