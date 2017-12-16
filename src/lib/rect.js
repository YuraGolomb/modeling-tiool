export default {
  onMouseUp: (paperScope, tool, e) => {
    const point = e.point;
    const size = new paperScope.paper.Size(100, 100);
    const rect = new paperScope.paper.Rectangle();
    rect.center = point;
    rect.size = size;
    const path = new paperScope.Path.Rectangle(rect);
    path.fillColor = '#e9e9ff'
  },
  onMouseDrag: (paperScope, tool, e) => {

  },
  onMouseDown: (paperScope, tool, e) => {

  },
}
