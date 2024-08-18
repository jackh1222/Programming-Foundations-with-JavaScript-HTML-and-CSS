# Image Conversion Project

This project is a simple web-based application that allows users to upload an image and apply various filters to it. The application is built using HTML, JavaScript, and the Duke University `SimpleImage` library. The project provides functionality to convert images to grayscale, add color effects, and apply different artistic filters.

Please try Webpage with link: https://codepen.io/Jackh1222/pen/YzoYxXb

## Features

- **Upload an Image**: Users can upload any image file (PNG, JPEG, etc.) and see the original image displayed on the first canvas.
- **Grayscale Conversion**: Convert the uploaded image to grayscale.
- **Red Filter**: Apply a red filter to the image, enhancing red tones based on the average brightness of the pixels.
- **Fancy Border**: Add a vintage-style brown border to the image.
- **Star Overlay**: Add an overlay of white stars across the image, scaled to the size of the image.
- **Rainbow Filter**: Apply a rainbow filter that divides the image into seven stripes, each with a different color of the rainbow.
- **Blur Effect**: Apply a blur effect to the image, randomly blurring pixels within a set radius.
- **Reset Image**: Reset the image to its original state.

## How to Use

1. **Upload an Image**: Click the "Choose File" button to select an image from your computer. The image will be displayed on the first canvas.
2. **Apply Filters**:
   - **Grayscale**: Click "MakeGray" to convert the image to grayscale.
   - **Red Filter**: Click "MakeRed" to apply the red filter.
   - **Fancy Border**: Click "Fancy Border" to add a vintage-style border.
   - **Star Overlay**: Click "Star Overlay" to overlay white stars on the image.
   - **Rainbow Filter**: Click "Rainbow" to apply the rainbow filter.
   - **Blur**: Click "Blur" to apply a blur effect.
3. **View Results**: The filtered image will be displayed on the second canvas.
4. **Reset Image**: Click "Reset" to restore the original image and clear any applied filters.

## File Structure

- `index.html`: The main HTML file that structures the webpage.
- `script.js`: The JavaScript file containing the logic for image manipulation.
- `SimpleImage.js`: The external library used for handling image uploads and pixel manipulation.

## Dependencies

- [SimpleImage Library](https://www.dukelearntoprogram.com/course1/common/js/image/SimpleImage.js): This project uses Duke University's SimpleImage library for handling image processing.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

This project was inspired by Duke University's "Programming with JavaScript" course, which introduces students to image processing and manipulation techniques using JavaScript.
