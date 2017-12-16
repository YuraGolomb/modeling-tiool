import React from 'react'
import '../styles/FigureSelector.css';

const FigureSelector = ({ onFigureSelect }) => (
  <div className="figure-selector-wrapper">
    <div onClick={(e) => onFigureSelect('rect')}>rect</div>
    <div onClick={(e) => onFigureSelect('circ')}>circ</div>
  </div>
)

export default FigureSelector;
