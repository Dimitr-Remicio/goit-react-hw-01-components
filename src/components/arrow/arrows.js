import React, { useState, useEffect } from 'react';
import 'aditional/colors.css';

import style from 'aditional/toogle.module.css';
import 'aditional/colors.css';
import 'aditional/arrow.css';

function Dark() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const overflowScroll = () => {
    const scrollActn = document.querySelector('#style-3');

    if (scrollActn.classList.contains('scrollbar')) {
      scrollActn.style.overflow = 'hidden';
      scrollActn.classList.remove('scrollbar');
    } else {
      scrollActn.style.overflow = 'scroll';
      scrollActn.classList.add('scrollbar');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className="header-right">
        <div
          className={`Dark ${theme}`}
          id="Darkbutton"

        >
          <div style={style}>
            <input
              type="checkbox"
              className={style.checkbox}
              id="chk"
              onClick={toggleTheme}
            />
            <label className={style.label} htmlFor="chk">
              <div className={style.ball}></div>
            </label>
          </div>
        </div>
        <div className="content_header">
          <a href="#tabtransaction">
            <svg id="D" width="30" height="30" viewBox="0 0 176.78 176.78">
              <polygon
                id="headerCont"
                class="cls-1  btn  "
                points="176.78 35.35 141.42 0 88.39 53.03 35.35 0 0 35.35 53.03 88.39 0 141.42 35.35 176.78 88.39 123.74 141.42 176.78 176.78 141.42 123.74 88.39 176.78 35.35"
              />
            </svg>
          </a>
          <a href="#friends">
            <svg id="C" width="30" height="30" viewBox="0 0 176.78 176.78">
              <polygon
                id="headerCont"
                class="cls-1 btn  "
                points="176.78 35.35 141.42 0 88.39 53.03 35.35 0 0 35.35 53.03 88.39 0 141.42 35.35 176.78 88.39 123.74 141.42 176.78 176.78 141.42 123.74 88.39 176.78 35.35"
              />
            </svg>
          </a>
          <a href="#states">
            <svg id="B" width="30" height="30" viewBox="0 0 176.78 176.78">
              <polygon
                id="headerCont"
                class="cls-1 btn  "
                points="176.78 35.35 141.42 0 88.39 53.03 35.35 0 0 35.35 53.03 88.39 0 141.42 35.35 176.78 88.39 123.74 141.42 176.78 176.78 141.42 123.74 88.39 176.78 35.35"
              />
            </svg>
          </a>
          <a href="#profile">
            <svg id="A" width="30" height="30" viewBox="0 0 176.78 176.78">
              <polygon
                id="headerCont"
                class="cls-1 btn "
                points="176.78 35.35 141.42 0 88.39 53.03 35.35 0 0 35.35 53.03 88.39 0 141.42 35.35 176.78 88.39 123.74 141.42 176.78 176.78 141.42 123.74 88.39 176.78 35.35"
              />
            </svg>
          </a>

        </div>
        <div class="scroll-downs" onClick={overflowScroll}>
          <div class="mousey">
            <div class="scroller"></div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Dark;
