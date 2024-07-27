import React from 'react';
import { useSelector } from 'react-redux';

const Site = () => {
  const siteArray = useSelector((state) => state.siteArray);
  
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">site coding <em>나의 작업물</em></h2>
        <div className="site__wrap">
          {
            siteArray.map((item, index) => (
              <article className={"site__item s" + (index + 1)} key={index}>
                <span className="num">{index + 1}.</span>
                <div className="text">
                  {
                    item.text.map((text, index) => (
                      <div key={index}>{text}</div>
                    ))
                  }
                </div>
                <h3 className="title">{item.title}</h3>
                <div className="btn">
                  <a href={item.code}>code</a>
                  <a href={item.view}>view</a>
                </div>
                <div className="info">
                  {
                    item.info.map((info, index) => (
                      <span key={index}>{info}</span>
                    ))
                  }
                </div>
              </article>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Site;