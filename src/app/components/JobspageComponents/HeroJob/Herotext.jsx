import React from 'react';
import SearchField from './SearchField';

function Herotext() {
  const textStyle = {
    fontFamily: 'Jost,sans-serif',
    fontSize: '60px',
    fontWeight: 500,
    color: "rgba(255, 255,255, 1)",

    // lineHeight: '116px',
    letterSpacing: '0em',
    textAlign: 'center',
  };
  const gobiStyle = {
    fontFamily: 'Jost,sans-serif',
    fontSize: '40px',
    color: "rgba(255, 255,255, 1)",

    fontWeight: 500,
    // lineHeight: '116px',
    letterSpacing: '0em',
    textAlign: 'center',
  };

  return (
    <div className='text-center container' style={{
        paddingTop:"10rem"
    }}>
      <>
        <p style={textStyle}>HyperLocal Job Portal</p>
        <p style={gobiStyle}>Gobichettipalayam</p>
      </>
      <>
        <SearchField />
      </>
    </div>
  );
}

export default Herotext;
