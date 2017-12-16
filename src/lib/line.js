export default {
  onMouseUp: (paperScope, tool, e) => {
    const point = e.point;
    const point2 = new paperScope.paper.Point(e.point.x + 100, e.point.y + 100);
    const path = new paperScope.paper.Path.Line(point, point2);
    path.fillColor = 'red'
    path.strokeColor = 'red'
    path.strokeWidth = 2;
    path.shadowColor = 'white';
    path.shadowOffset = new paperScope.Point(2, 2);
  }
}
