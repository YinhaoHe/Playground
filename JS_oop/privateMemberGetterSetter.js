function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      }
      defaultLocation = {
        x: value.x,
        y: value.y,
      };
    },
  });
}

const circle = new Circle(10);
circle.draw();

circle.defaultLocation = { x: 1, y: 2 };

const location = circle.defaultLocation;
console.log(location);
