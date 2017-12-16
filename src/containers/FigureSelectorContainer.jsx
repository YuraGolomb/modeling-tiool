import React from 'react';
import FigureSelector from '../components/FigureSelector.jsx';

class FigureSelectorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      figure: 'rect',
    }
    this.onFigureSelect = this.onFigureSelect.bind(this);
  }
  onFigureSelect(figure) {
    this.setState({ figure }, () => this.props.onFigureSelect(figure));
  }


  render() {
    return (<FigureSelector onFigureSelect={this.onFigureSelect} selected={this.props.selected}/>)
  }
}

export default FigureSelectorContainer;
