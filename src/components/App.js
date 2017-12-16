import React, { Component } from 'react';
// import logo from '../logo.svg';
import Paper from 'paper';
import FigureOptionsContainer from '../containers/FigureOptionsContainer';
import FigureSelectorContainer from '../containers/FigureSelectorContainer';
import WorkplaceContainer from '../containers/WorkplaceContainer';
import Rect from '../lib/rect';
import Rorect from '../lib/roundrect';
import Circ from '../lib/circle';
import Line from '../lib/line';
import Pen from '../lib/pen';
import jsPDF from 'jspdf';
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
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onFigureSelect = this.onFigureSelect.bind(this);
  }

  componentDidMount() {
    this.workplaceCanv = document.getElementById('workplace')
    var ctx = this.workplaceCanv.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, this.workplaceCanv.width, this.workplaceCanv.height);;
    this.workplacePaper = new Paper.paper.PaperScope();
    this.workplacePaper.setup(this.workplaceCanv);

    this.tool = new this.workplacePaper.Tool();
    this.tool.minDistance = 0;
    this.tool.onMouseUp = this.onMouseUp;
    this.tool.onMouseDown = this.onMouseDown;
    this.tool.onMouseDrag = this.onMouseDrag;
    this.tool.onMouseMove = this.onMouseMove;

    this.workplacePaper.view.draw();

    this.setState({ workplacePaper: this.workplacePaper })
  }

  onMouseUp(e) {

    if (this.state.figure === 'rect') {
      Rect.onMouseUp(this.workplacePaper, this.tool,  e);
    } else if (this.state.figure === 'rorect') {
      Rorect.onMouseUp(this.workplacePaper, this.tool,  e);
    } else if (this.state.figure === 'circ') {
      Circ.onMouseUp(this.workplacePaper, this.tool,  e);
    }else if (this.state.figure === 'line') {
      Line.onMouseUp(this.workplacePaper, this.tool,  e);
    } else if (this.state.figure === 'pen') {
      this.path = null;
    }
    this.setState({ figure: '' })

  }

  onMouseDrag(e) {
    if (this.state.figure === 'pen') {
      this.path.add(e.point);
      return
    }
    if (this.segment) {
      this.segment.point.y += e.delta.y;
      this.segment.point.x += e.delta.x;
    } else if (this.path) {
      this.path.position.x += e.delta.x;
      this.path.position.y += e.delta.y;
    }
  }
  onMouseMove(e) {

  }

  onMouseDown(e) {

    if (this.state.figure === 'pen') {
      this.path = new this.workplacePaper.Path();
      this.path.strokeColor = 'black';
      this.strokeWidth = 2;
      return ;
    }
    this.workplacePaper.project.activeLayer.selected = false;

    if (e.item) e.item.selected = true;
    this.path = null;
    this.segment = null;
    var hitResult = this.workplacePaper.project.hitTest(e.point, this.hitOptions);

    if (hitResult) {
      this.path = hitResult.item;
      if (hitResult.type == 'segment') {
        this.segment = hitResult.segment;
      }
      let movePath = hitResult.type == 'fill';
      if (movePath)
      this.workplacePaper.project.activeLayer.addChild(hitResult.item);
    }

    this.setState({ item: e.item })
  }

  onFigureSelect(figure) {
    this.setState({ figure });
  }
  save() {
    const canvas = document.getElementById('workplace');
    var imgData = canvas.toDataURL("image/png");
    var pdf = new jsPDF();

    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save("download.pdf");
  }

  render() {
    return (
      <div className="app">
        <FigureOptionsContainer item={this.state.item} paperScope={this.state.workplacePaper} />
        <FigureSelectorContainer selected={this.state.figure} onFigureSelect={this.onFigureSelect}/>
        <WorkplaceContainer />
        <button className="save" onClick={this.save}>Save</button>
      </div>
    );
  }
}

export default App;
