// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, target
) {
  if (!target) {
    var target = document.body;
  }
  var elements = [];
  if (target.classList && target.classList.contains(className)) {
    elements.push(target);
  }
  var children = target.childNodes;
  for (var i = 0; i < children.length; i++) {
    var element = children[i];
    if (element.classList && element.classList.contains(className)) {
      elements.push(element);
    }
    if (element.childNodes) {
      var elementChildren = element.childNodes;
      for (var j = 0; j < elementChildren.length; j++) {
        var nestedElements = getElementsByClassName(className, elementChildren[j]);
        elements = elements.concat(nestedElements);
      }
    }
  }
  setTimeout(function() {
    console.log(elements);
    console.log(document.getElementsByClassName(className));
  }, 8000);
  return elements;
};
