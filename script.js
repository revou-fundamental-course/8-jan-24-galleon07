function calculateAreaAndPerimeter() {
    let sideLength = document.getElementById('sideLength').value;
    let error = document.getElementById('error');
    let resultArea = document.getElementById('resultArea');
    let resultPerimeter = document.getElementById('resultPerimeter');

    if (sideLength <= 0 || isNaN(sideLength)) {
      error.innerHTML = "Please enter a valid positive number";
      resultArea.innerHTML = "";
      resultPerimeter.innerHTML = "";
    } else {
      error.innerHTML = "";
      let area = sideLength * sideLength;
      let perimeter = 4 * sideLength;
      resultArea.innerHTML = "The area of the square with side length " + sideLength + " is: " + area;
      resultPerimeter.innerHTML = "The perimeter of the square with side length " + sideLength + " is: " + perimeter;
    }
  }