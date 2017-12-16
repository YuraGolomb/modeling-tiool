import React from 'react'
import '../styles/FigureSelector.css';

const FigureSelector = ({ onFigureSelect, selected }) => (
  <div className="figure-selector-wrapper">
    <div className={`figure ${selected === 'rect' ? 'selected' : ''}`} onClick={(e) => onFigureSelect('rect')}>rect</div>
    <div className={`figure ${selected === 'rorect' ? 'selected' : ''}`} onClick={(e) => onFigureSelect('rorect')}>rorect</div>
    <div className={`figure ${selected === 'circ' ? 'selected' : ''}`} onClick={(e) => onFigureSelect('circ')}>circ</div>
    <div className={`figure ${selected === 'line' ? 'selected' : ''}`} onClick={(e) => onFigureSelect('line')}>line</div>
    <div className={`figure ${selected === 'pen' ? 'selected' : ''}`} onClick={(e) => onFigureSelect('pen')}>pen</div>
  </div>
)

export default FigureSelector;
