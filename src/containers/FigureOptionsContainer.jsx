import React from 'react';
import FigureOptions from '../components/FigureOptions.jsx';

class FigureOptionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      fillColor: {},
      strokeColor: {},
      strokeWidth: 1,
      position: {},
    }

    this.changeOpacity = this.changeOpacity.bind(this);
    this.changeSize = this.changeSize.bind(this);
    this.changePosition = this.changePosition.bind(this);
    this.changeFillColor = this.changeFillColor.bind(this);
    this.changeShadowColor = this.changeShadowColor.bind(this);
    this.changeShadowBlur = this.changeShadowBlur.bind(this);
    this.changeShadowOffset = this.changeShadowOffset.bind(this);
    this.changeStrokeColor = this.changeStrokeColor.bind(this);
    this.changeStrokeWidth = this.changeStrokeWidth.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      item: nextProps.item,
      fillColor: nextProps.item ? nextProps.item.fillColor : {},
      strokeColor: nextProps.item ? nextProps.item.strokeColor : {},
      strokeWidth: nextProps.item ? nextProps.item.strokeWidth : null,
      position: nextProps.item ? nextProps.item.position : {},
      bounds: nextProps.item ? nextProps.item.bounds : {},
      shadowOffset: nextProps.item ? nextProps.item.shadowOffset : {},
      shadowColor: nextProps.item ? nextProps.item.shadowColor : {},
      shadowBlur: nextProps.item ? nextProps.item.shadowBlur : {},
    });
  }

  changeFillColor(e, field) {
    let newValue = +e.target.value;
    if (e.target.value !== '0.') {
      if (newValue < 0) newValue = 0;
      if (newValue > 1) newValue = 1;
    } else { newValue = e.target.value; }
    if (this.state.item) {
      this.state.item.fillColor[field] = newValue;
      this.setState({ fillColor: this.state.item.fillColor });
    }
  }

  changeShadowColor(e, field) {
    let newValue = +e.target.value;
    if (e.target.value !== '0.') {
      if (newValue < 0) newValue = 0;
      if (newValue > 1) newValue = 1;
    } else { newValue = e.target.value; }
    if (this.state.item) {
      this.state.item.shadowColor[field] = newValue;
      this.setState({ shadowColor: this.state.item.shadowColor });
    }
  }

  changeStrokeColor(e, field) {
    let newValue = +e.target.value;
    if (e.target.value !== '0.') {
      if (newValue < 0) newValue = 0;
      if (newValue > 1) newValue = 1;
    } else { newValue = e.target.value; }
    if (this.state.item) {
      this.state.item.strokeColor[field] = newValue;
      this.setState({ strokeColor: this.state.item.strokeColor });
    }
  }

  changeOpacity(e) {
    let newValue = +e.target.value;
    if (isNaN(e.target.value))return
    if (e.target.value !== '0.') {
      if (newValue < 0) newValue = 0;
      if (newValue > 0.99999) newValue = 0.9999;
    } else { newValue = e.target.value; }
    if (this.state.item) {
      this.state.item.opacity = newValue;
      this.setState({ strokeColor: this.state.item.opacity });
    }
  }


  changeStrokeWidth(e) {
    let newValue = +e.target.value;
    if (newValue < 0) newValue = 0;
    if (this.state.item) {
      this.state.item.strokeWidth = newValue;
      this.setState({ strokeWidth: this.state.item.strokeWidth });
    }
  }
  changeShadowBlur(e) {
    let newValue = +e.target.value;
    if (newValue < 0) newValue = 0;
    if (this.state.item) {
      this.state.item.shadowBlur = newValue;
      this.setState({ shadowBlur: this.state.item.shadowBlur });
    }
  }
  changeStrokeWidth(e) {
    let newValue = +e.target.value;
    if (newValue < 0) newValue = 0;
    if (this.state.item) {
      this.state.item.strokeWidth = newValue;
      this.setState({ strokeWidth: this.state.item.strokeWidth });
    }
  }
  changeShadowOffset(e, field) {
    let newValue = +e.target.value;
    if (e.target.value[e.target.value.length - 1] === '.') newValue = e.target.value;
    if (isNaN(newValue)) return
    if (this.state.item) {
      this.state.item.shadowOffset[field] = newValue;
      this.setState({ shadowOffset: this.state.item.shadowOffset });
    }
  }
  changePosition(e, field) {
    let newValue = +e.target.value;
    if (newValue < 0) newValue = 0;
    if (e.target.value[e.target.value.length - 1] === '.') newValue = e.target.value;
    if (isNaN(newValue)) return
    if (this.state.item) {
      this.state.item.position[field] = newValue;
      this.setState({ position: this.state.item.position });
    }
  }
  changeSize(e, field) {
    let newValue = +e.target.value;
    if (newValue < 1) newValue = 1  ;
    if (e.target.value[e.target.value.length - 1] === '.') newValue = e.target.value;
    if (isNaN(newValue)) return;
    if (this.state.item) {
      this.state.item.bounds[field] = newValue;
      this.setState({ bounds: this.state.item.bounds });
    }
  }
  render() {
    return ( <FigureOptions
      item={this.state.item}
      changeFillColor={this.changeFillColor}
      changeStrokeColor={this.changeStrokeColor}
      changeShadowBlur={this.changeShadowBlur}
      changeOpacity={this.changeOpacity}
      changeShadowOffset={this.changeShadowOffset}
      changeShadowColor={this.changeShadowColor}
      changePosition={this.changePosition}
      changeSize={this.changeSize}
      changeStrokeWidth={this.changeStrokeWidth}
    />)
  }
}

export default FigureOptionsContainer;
