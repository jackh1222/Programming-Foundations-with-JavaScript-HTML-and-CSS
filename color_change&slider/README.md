# Color Change & Slider Practice

This project is a simple web-based application that allows users to interact with a canvas element using a color picker and a range slider. Users can change the background color of the canvas and draw squares of varying sizes on the canvas by adjusting the slider.

## Features

- **Change Canvas Background Color:**
  - Users can select a color using the color input field, which changes the background color of the canvas.

- **Adjust Square Size:**
  - The range slider allows users to control the size of the squares drawn on the canvas. Moving the slider updates the squares in real-time.

## Project Structure

### HTML

The HTML structure includes:
- A heading (`<h1>`) titled "Color Change & Slider Practice".
- A canvas element where the background color can be changed and squares can be drawn.
- A color input field for changing the canvas background color.
- A range slider for adjusting the size of the squares drawn on the canvas.

### CSS
The CSS is used to style the canvas and the overall layout:
- The canvas has a defined width, height, margin, and border.
- The canvas initially has an orange background.
- The body of the document has a margin to provide spacing.

### JavaScript
Two JavaScript functions control the interactive features:
- doColor(): Changes the background color of the canvas based on the color selected from the color input field.
- doSquare(): Draws squares on the canvas with sizes determined by the range slider's value. The canvas is cleared and updated each time the slider is adjusted.
