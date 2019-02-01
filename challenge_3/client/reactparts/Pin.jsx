import React from 'react';

function changeText(e) {
  console.log('hello');
  e.target.value = "0";
  // debugger;
}

class Pin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { key, pin } = props;
    return (
      <input type='button' name={key} value={pin} onClick={changeText} className='pin'>
      </input>
    )
  }
}

export default Pin;
