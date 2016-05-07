// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // Beginning with only the document root level elements:
  var target = document.body;
  var elements = [];
  var children = target.childNodes;
  for (var i = 0; i < children.length; i++) {
    var element = children[i];
    if (element.classList && element.classList.contains(className) !== -1) {
      elements.push(element);
    }
  }
  return elements;
};
