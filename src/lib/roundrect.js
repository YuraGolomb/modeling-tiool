export default {
  onMouseUp: (paperScope, tool, e) => {
    const point = e.point;
    const size = new paperScope.paper.Size(100, 100);
    const rect = new paperScope.paper.Rectangle();
    rect.center = point;
    rect.size = size;
    const path = new paperScope.Path.RoundRectangle(rect, 6);
    console.log(path);
    path.fillColor = 'yellow'
    path.strokeColor = 'yellow'
    path.strokeWidth = 2;
    path.shadowColor = 'white';
    path.shadowOffset = new paperScope.Point(2, 2);
  }
}
