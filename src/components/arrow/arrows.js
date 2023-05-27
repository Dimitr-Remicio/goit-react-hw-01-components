import React, { useState, useEffect } from 'react';
import 'aditional/colors.css';

import style from 'aditional/toogle.module.css';
import 'aditional/colors.css';
import 'aditional/arrow.css';


// const header = {

// }

function Dark() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div
        class="header-right"
        style={{
          height: '100%',
          width: 'auto',
          padding: '0 50px',
          display: 'flex',
          position:'fixed',
          justifyContent: 'center',
          alignItems: 'center',
          right: '0',
          margin: '0 auto',
          backgroundColor: 'var(--background-color)',
          boxShadow: '0px 0px 5px 0px var(--shadow-card)',

          zIndex: '199',
        }}
      >
        <div
        className={`Dark ${theme}`}
        id="Darkbutton"
        style={{
          position: 'absolute',
          top: '0',
          fontSize: '30px',
          margin: '50px 0',

          zIndex: '200',
        }}
      >
        <div style={style}>
          <input
            type="checkbox"
            class={style.checkbox}
            id="chk"
            onClick={toggleTheme}
          />
          <label class={style.label} for="chk">
            <div class={style.ball}></div>
          </label>
        </div>


      </div>
        <div
          className="content_header"
          style={{
            display: 'flex',
            flexDirection: 'column-reverse',
            gap: '50px',
          }}
        >
          <div class="scroll-down-dude"></div>
          <div class="scroll-up-dude"></div>
        </div>
      </div>

    </>
  );
}
export default Dark;
