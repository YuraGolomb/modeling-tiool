export default {
  onMouseUp: (paperScope, tool, e) => {
    const point = e.point;
    const path = new paperScope.Path.Circle(point, 70);
    path.fillColor = 'red'
    path.strokeColor = 'red';
    path.strokeWidth = 3;
    path.shadowColor = 'white';
    path.shadowOffset = new paperScope.Point(2, 2);
  }
}
