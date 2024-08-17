var originalImage;
var grayImage;
var redImage;
var filterImage;

function upload() {
  var fileinput = document.getElementById("finput");
  originalImage = new SimpleImage(fileinput);
  grayImage = new SimpleImage(fileinput);
  redImage = new SimpleImage(fileinput);
  filterImage = new SimpleImage(fileinput);

  // Display the original image on the first canvas
  var canvas1 = document.getElementById("can1");
  canvas1.width = originalImage.getWidth();
  canvas1.height = originalImage.getHeight();
  originalImage.drawTo(canvas1);

  // Clear the second canvas
  var canvas2 = document.getElementById("can2");
  var context2 = canvas2.getContext("2d");
  context2.clearRect(0, 0, canvas2.width, canvas2.height);

  canvas2.width = originalImage.getWidth();
  canvas2.height = originalImage.getHeight();
}

function makeGray() {
  if (originalImage === undefined || originalImage === null) {
    alert("No image selected! Please upload an image first.");
    return;
  }
  for (var pixel of grayImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var canvas2 = document.getElementById("can2");
  canvas2.width = grayImage.getWidth();
  grayImage.drawTo(canvas2);
}

//Make the image red
function makeRed() {
  if (originalImage === undefined || originalImage === null) {
    alert("No image selected! Please upload an image first.");
    return;
  }
  for (var pixel of redImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
  var canvas2 = document.getElementById("can2");
  canvas2.width = redImage.getWidth();
  redImage.drawTo(canvas2);
}

//Clean the second canvas and display the original image on first canvas
function resetImage() {
  if (originalImage !== undefined && originalImage !== null) {
    // Display the original image on the first canvas
    var canvas1 = document.getElementById("can1");
    canvas1.width = originalImage.getWidth();
    canvas1.height = originalImage.getHeight();
    originalImage.drawTo(canvas1);

    // Reset all global variables to the original image
    grayImage = new SimpleImage(originalImage);
    redImage = new SimpleImage(originalImage);
    filterImage = new SimpleImage(originalImage); // Reset filter image

    // Clear the second canvas
    var canvas2 = document.getElementById("can2");
    var context2 = canvas2.getContext("2d");
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
  } else {
    alert("No image is loaded to reset.");
  }
}

//Add a brown border for the image
function addFancyBorder() {
  if (originalImage === undefined || originalImage === null) {
    alert("No image selected! Please upload an image first.");
    return;
  }

  filterImage = new SimpleImage(originalImage);
  const width = filterImage.getWidth();
  const height = filterImage.getHeight();
  const borderThickness = Math.floor(width / 20); // Calculate border thickness as 1/20th of the image width
  const borderColor = { r: 139, g: 69, b: 19 }; // Brown color for a vintage effect

  for (let pixel of filterImage.values()) {
    const x = pixel.getX();
    const y = pixel.getY();

    // Apply the border to the top, bottom, left, and right edges
    if (
      x < borderThickness ||
      x >= width - borderThickness ||
      y < borderThickness ||
      y >= height - borderThickness
    ) {
      pixel.setRed(borderColor.r);
      pixel.setGreen(borderColor.g);
      pixel.setBlue(borderColor.b);
    }
  }

  var canvas2 = document.getElementById("can2");
  canvas2.width = filterImage.getWidth();
  canvas2.height = filterImage.getHeight();
  filterImage.drawTo(canvas2);
}

//Randomly display small white spots
function addStarOverlay() {
  if (originalImage === undefined || originalImage === null) {
    alert("No image selected! Please upload an image first.");
    return;
  }

  filterImage = new SimpleImage(originalImage); // Work with a copy of the original image
  const width = filterImage.getWidth();
  const height = filterImage.getHeight();

  // Calculate a base number of stars and scale it with the image size
  const baseNumStars = 50; // Minimum number of stars
  const scaledNumStars = Math.floor((width * height) / 50000); // Scaled based on image size
  const numStars = baseNumStars + scaledNumStars; // Total number of stars
  const starRadius = Math.max(1, Math.floor(Math.min(width, height) / 100)); // Circle radius based on image size
  const starColor = { r: 255, g: 255, b: 255 }; // White color for stars

  for (let i = 0; i < numStars; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    // Draw a solid white circle directly on the image
    drawCircleOnImage(filterImage, x, y, starColor, starRadius);
  }

  var canvas2 = document.getElementById("can2");
  canvas2.width = filterImage.getWidth();
  canvas2.height = filterImage.getHeight();
  filterImage.drawTo(canvas2);
}

function drawCircleOnImage(image, centerX, centerY, color, radius) {
  for (let x = -radius; x <= radius; x++) {
    for (let y = -radius; y <= radius; y++) {
      const distance = Math.sqrt(x * x + y * y);
      if (distance <= radius) {
        const pixelX = centerX + x;
        const pixelY = centerY + y;

        if (
          pixelX >= 0 &&
          pixelX < image.getWidth() &&
          pixelY >= 0 &&
          pixelY < image.getHeight()
        ) {
          const pixel = image.getPixel(pixelX, pixelY);
          pixel.setRed(color.r);
          pixel.setGreen(color.g);
          pixel.setBlue(color.b);
        }
      }
    }
  }
}

//Add a rainbow filter
function addRainbowFilter() {
  if (originalImage === undefined || originalImage === null) {
    alert("No image selected! Please upload an image first.");
    return;
  }

  filterImage = new SimpleImage(originalImage); // Work with a copy of the original image
  const height = filterImage.getHeight();
  const stripeHeight = Math.floor(height / 7); // Divide the image into 7 stripes

  // Define the colors of the rainbow
  const colors = [
    { r: 255, g: 0, b: 0 }, // Red
    { r: 255, g: 165, b: 0 }, // Orange
    { r: 255, g: 255, b: 0 }, // Yellow
    { r: 0, g: 255, b: 0 }, // Green
    { r: 0, g: 0, b: 255 }, // Blue
    { r: 75, g: 0, b: 130 }, // Indigo
    { r: 238, g: 130, b: 238 } // Violet
  ];

  for (let pixel of filterImage.values()) {
    const y = pixel.getY();
    let stripe = Math.floor(y / stripeHeight); // Determine which stripe the pixel belongs to

    // Ensure the stripe index is within bounds
    if (stripe >= colors.length) {
      stripe = colors.length - 1;
    }

    const color = colors[stripe];
    applyColorFilter(pixel, color);
  }

  var canvas2 = document.getElementById("can2");
  canvas2.width = filterImage.getWidth();
  canvas2.height = filterImage.getHeight();
  filterImage.drawTo(canvas2);
}

function applyColorFilter(pixel, color) {
  const avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

  // Apply the red channel
  if (avg < 128) {
    pixel.setRed((color.r / 127.5) * avg);
  } else {
    pixel.setRed((2 - color.r / 127.5) * avg + 2 * color.r - 255);
  }

  // Apply the green channel
  if (avg < 128) {
    pixel.setGreen((color.g / 127.5) * avg);
  } else {
    pixel.setGreen((2 - color.g / 127.5) * avg + 2 * color.g - 255);
  }

  // Apply the blue channel
  if (avg < 128) {
    pixel.setBlue((color.b / 127.5) * avg);
  } else {
    pixel.setBlue((2 - color.b / 127.5) * avg + 2 * color.b - 255);
  }
}

//Blur the image
function addBlurFilter() {
  if (originalImage === undefined || originalImage === null) {
    alert("No image selected! Please upload an image first.");
    return;
  }

  filterImage = new SimpleImage(
    originalImage.getWidth(),
    originalImage.getHeight()
  );
  const blurRadius = 10; // How far away to pick nearby pixels

  for (let pixel of originalImage.values()) {
    const x = pixel.getX();
    const y = pixel.getY();

    // Randomly decide whether to keep the pixel or blur it
    if (Math.random() < 0.5) {
      filterImage.setPixel(x, y, pixel);
    } else {
      const newX = getNearbyCoordinate(x, originalImage.getWidth(), blurRadius);
      const newY = getNearbyCoordinate(
        y,
        originalImage.getHeight(),
        blurRadius
      );
      const nearbyPixel = originalImage.getPixel(newX, newY);
      filterImage.setPixel(x, y, nearbyPixel);
    }
  }

  var canvas2 = document.getElementById("can2");
  canvas2.width = filterImage.getWidth();
  canvas2.height = filterImage.getHeight();
  filterImage.drawTo(canvas2);
}

function getNearbyCoordinate(coord, max, radius) {
  const offset = Math.floor(Math.random() * (2 * radius + 1) - radius); // Get a random offset within the radius
  const newCoord = coord + offset;

  // Ensure the new coordinate is within image bounds
  if (newCoord < 0) return 0;
  if (newCoord >= max) return max - 1;
  return newCoord;
}
