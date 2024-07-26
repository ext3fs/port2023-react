import React from 'react';
import { useSelector } from 'react-redux';

const Skill = () => {
  const skillText = useSelector((state) => state.skillText);

  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">challenge <em>나의 도전</em></h2>
        <div className="skill_desc">
          {
            skillText.map((item, key) => (
              <div key={key}>
                <span>{key+1}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Skill;