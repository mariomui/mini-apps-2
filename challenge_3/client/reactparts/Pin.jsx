import React from 'react';

function changeText(e) {
  console.log('hello');
  e.target.childNodes[0].textContent = "0"
}

function Pin(props) {
  const { pin } = props;
  return (
    <div onClick={changeText} className='pin'>
      {pin}
    </div>
  )
}

export default Pin;
