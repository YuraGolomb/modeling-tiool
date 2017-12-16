import React from 'react';
import '../styles/FigureOptions.css';

const FigureOptions = ({
  item,
  changeFillColor,
  changeStrokeColor,
  changeStrokeWidth,
  strokeColor,
  changePosition,
  changeSize,
  changeShadowColor,
  changeShadowBlur,
  changeOpacity,
  changeShadowOffset,
  strokeWidth
}) => (
  <div className="figure-options-wrapper">
    {(item && item.fillColor) && <div className="input-container">
      <div className="title">Fill color</div>
      <div>Red</div>
      <input maxLength="10" type="text" value={item && item.fillColor.red} onChange={(e) => changeFillColor(e, 'red')}/>
      <div>Green</div>
      <input maxLength="10" type="text" value={item && item.fillColor.green} onChange={(e) => changeFillColor(e, 'green')}/>
      <div>Blue</div>
      <input maxLength="10" type="text" value={item && item.fillColor.blue} onChange={(e) => changeFillColor(e, 'blue')}/>
    </div>}
    <div className="input-container">
      <div className="title">Stroke color</div>
      <div>Red</div>
      <input maxLength="10" type="text" value={item && item.strokeColor.red} onChange={(e) => changeStrokeColor(e, 'red')}/>
      <div>Green</div>
      <input maxLength="10" type="text" value={item && item.strokeColor.green} onChange={(e) => changeStrokeColor(e, 'green')}/>
      <div>Blue</div>
      <input maxLength="10" type="text" value={item && item.strokeColor.blue} onChange={(e) => changeStrokeColor(e, 'blue')}/>
    </div>
    <div className="input-container">
      <div className="title">Stroke width</div>
      <input maxLength="10" type="text" value={item && item.strokeWidth} onChange={(e) => changeStrokeWidth(e)}/>
    </div>
    <div className="input-container">
      <div className="title">Opacity</div>
      <input maxLength="10" type="text" value={item && item.opacity} onChange={(e) => changeOpacity(e)}/>
    </div>
    <div className="input-container">
      <div className="title">Position</div>
      <div>X</div>
      <input maxLength="10" type="text" value={item && item.position.x} onChange={(e) => changePosition(e, 'x')}/>
      <div>Y</div>
      <input maxLength="10" type="text" value={item && item.position.y} onChange={(e) => changePosition(e, 'y')}/>
    </div>
    <div className="input-container">
      <div className="title">Size</div>
      <div>Width</div>
      <input maxLength="10" type="text" value={item && item.bounds.width} onChange={(e) => changeSize(e, 'width')}/>
      <div>Height</div>
      <input maxLength="10" type="text" value={item && item.bounds.height} onChange={(e) => changeSize(e, 'height')}/>
    </div>
    {(item && item.shadowColor) &&
      <div>
        <div className="input-container">
          <div className="title">Shadow color</div>
          <div>Red</div>
          <input maxLength="10" type="text" value={item && item.shadowColor.red} onChange={(e) => changeShadowColor(e, 'red')}/>
          <div>Green</div>
          <input maxLength="10" type="text" value={item && item.shadowColor.green} onChange={(e) => changeShadowColor(e, 'green')}/>
          <div>Blue</div>
          <input maxLength="10" type="text" value={item && item.shadowColor.blue} onChange={(e) => changeShadowColor(e, 'blue')}/>
        </div>
        <div className="input-container">
          <div className="title">shadowBlur</div>
          <input maxLength="10" type="text" value={item && item.shadowBlur} onChange={(e) => changeShadowBlur(e)}/>
        </div>
        <div className="input-container">
          <div className="title">shadowOffset</div>
          <div>X</div>
          <input maxLength="10" type="text" value={item && item.shadowOffset.x} onChange={(e) => changeShadowOffset(e, 'x')}/>
          <div>Y</div>
          <input maxLength="10" type="text" value={item && item.shadowOffset.y} onChange={(e) => changeShadowOffset(e, 'y')}/>
        </div>
      </div>
    }
  </div>
);

export default FigureOptions;
