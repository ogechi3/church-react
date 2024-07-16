import React from 'react'

import './Header.css'
const Header = () => {
  return (
    <div className='app__header' id="home">
      <div className="app__header-text">
        Deeper Life Bible Church Urubi Group
      </div>
      <div className='app__sripture-reading'>
        <div className='p__cormorant'>Bible Verse</div>
        <div className="bible-verse " style={{fontSize:'15'}} >
          <p className='p__opensans' >
            Earnestly contend for the faith which was once delivered unto the saints

          </p>
       
        </div>
        <p className="app___scripture" style={{ color: "#ffff" }}>
          From: Matt 23:3
        </p>
      </div>
      
    </div>
  );
}

export default Header
