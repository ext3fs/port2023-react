import React from 'react'
import { useSelector } from 'react-redux';

const Skip = () => {
  const navArray = useSelector((state) => state.navArray);
  return (
    <div id="skip">
      {
        navArray.map((item, key) => {
          return <a href={item.link} key={key}>{item.title}</a>
        })
      }
    </div>
  )
}

export default Skip
