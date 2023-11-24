
function calculateRectangleArea(length, width) {
    if (isNaN(length) || isNaN(width)) {
      console.error('Invalid input. Please provide valid numerical values for length and width.');
      return;
    }
  
    return length * width;
  }
  
  function calculateRectanglePerimeter(length, width) {
    if (isNaN(length) || isNaN(width)) {
      console.error('Invalid input. Please provide valid numerical values for length and width.');
      return;
    }
  
    return 2 * (length + width);
  }
  
  // Square Functions
  function calculateSquareArea(sideLength) {
    if (isNaN(sideLength)) {
      console.error('Invalid input. Please provide a valid numerical value for side length.');
      return;
    }
  
    return sideLength * sideLength;
  }
  
  function calculateSquarePerimeter(sideLength) {
    if (isNaN(sideLength)) {
      console.error('Invalid input. Please provide a valid numerical value for side length.');
      return;
    }
  
    return 4 * sideLength;
  }
  
  // Circle Functions
  function calculateCircleArea(radius) {
    if (isNaN(radius) || radius < 0) {
      console.error('Invalid input. Please provide a valid positive numerical value for radius.');
      return;
    }
  
    const pi = Math.PI;
    return pi * radius * radius;
  }
  
  function calculateCircleCircumference(radius) {
    if (isNaN(radius) || radius < 0) {
      console.error('Invalid input. Please provide a valid positive numerical value for radius.');
      return;
    }
  
    const pi = Math.PI;
    return 2 * pi * radius;
  }
  
 
  const rectangleLength = 10;
  const rectangleWidth = 5;
  
  const rectangleArea = calculateRectangleArea(rectangleLength, rectangleWidth);
  console.log(`Rectangle area: ${rectangleArea}`);
  
  const rectanglePerimeter = calculateRectanglePerimeter(rectangleLength, rectangleWidth);
  console.log(`Rectangle perimeter: ${rectanglePerimeter}`);
  
  const squareSideLength = 8;
  
  const squareArea = calculateSquareArea(squareSideLength);
  console.log(`Square area: ${squareArea}`);
  
  const squarePerimeter = calculateSquarePerimeter(squareSideLength);
  console.log(`Square perimeter: ${squarePerimeter}`);
  
  const circleRadius = 6;
  
  const circleArea = calculateCircleArea(circleRadius);
  console.log(`Circle area: ${circleArea}`);
  
  const circleCircumference = calculateCircleCircumference(circleRadius);
  console.log(`Circle circumference: ${circleCircumference}`);
  