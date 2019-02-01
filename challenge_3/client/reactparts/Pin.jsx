import React from 'react';

function changeText(e) {
  console.log('hello');
  e.target.value = "0";
  // debugger;
}

class Pin extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { key, pin } = this.props;
    return (
      <input type='button' name={key} value={pin} onClick={changeText} className='pin'>
      </input>
    )
  }
}

export default Pin;
