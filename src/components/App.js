import React, { Component } from 'react';
// import logo from '../logo.svg';
import Paper from 'paper';
import FigureOptionsContainer from '../containers/FigureOptionsContainer';
import FigureSelectorContainer from '../containers/FigureSelectorContainer';
import WorkplaceContainer from '../containers/WorkplaceContainer';
import Rect from '../lib/rect';

import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      figure: '',
    }
    this.figures = [];
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseDrag = this.onMouseDrag.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onFigureSelect = this.onFigureSelect.bind(this);
  }

  componentDidMount() {
    this.workplaceCanv = document.getElementById('workplace');
    this.workplacePaper = new Paper.paper.PaperScope();
    this.workplacePaper.setup(this.workplaceCanv);
    console.log('PaperScope ======> ');
    console.log(this.workplacePaper);

    this.tool = new this.workplacePaper.Tool();
    this.tool.minDistance = 0;
    this.tool.onMouseUp = this.onMouseUp;
    this.tool.onMouseDown = this.onMouseDown;
    this.tool.onMouseDrag = this.onMouseDrag;
    console.log('Tool ======> ');
    console.log(this.tool);

    this.workplacePaper.view.draw();
  }

  onMouseUp(e) {
    if (this.state.figure === 'rect') {
      const newRect = Rect.onMouseUp(this.workplacePaper, this.tool,  e);
      this.figures.push(newRect);
    }
  }

  onMouseDrag(e) {
    if (this.state.figure === 'rect') {
      Rect.onMouseDrag(this.workplacePaper, this.tool,  e);
    }
  }

  onMouseDown(e) {
    if (this.state.figure === 'rect') {
      Rect.onMouseDown(this.workplacePaper, this.tool,  e);
    }
  }

  onFigureSelect(figure) {
    console.log(figure);
    this.setState({ figure });
  }

  render() {
    // console.log(Paper);
    return (
      <div className="app">
        <FigureOptionsContainer />
        <FigureSelectorContainer onFigureSelect={this.onFigureSelect}/>
        <WorkplaceContainer />
      </div>
    );
  }
}

export default App;
