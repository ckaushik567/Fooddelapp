import React from 'react';
import ordercss from './Header.module.css';

function Header() {
  return (
     <div className={ordercss.container}>
        <div className={ordercss.imgSection}>
          <h1>Order your favourite food here</h1>
          <p>choose from a diverse manu featuring delectable array of dishes crafted with finest ingredeints culinary and expertised.Our mission is to satisfy carvings and elevate your dining experince,One delicius meal at a time.</p>
          <button>View Manu</button>
        </div>
     </div>
  )
}

export default Header;
