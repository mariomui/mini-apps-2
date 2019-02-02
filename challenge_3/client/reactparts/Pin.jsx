import React from 'react';



class Pin extends React.Component {
  constructor(props) {
    super(props);
  }
  changeText = (e) => {
    this.props.addToScore(1);
    e.target.value = "0";
  }

  render() {
    const { key, pin } = this.props;
    return (
      <input type='button' name={key} key={key} value={pin} onClick={this.changeText} className='pin'>
      </input>
    )
  }
}

export default Pin;
