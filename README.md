# Floating Menu Component

This project provides a customizable floating menu that can be easily integrated into personal website projects or Webflow sites. The menu appears as a set of pill-shaped buttons that float in the center of the screen when activated.

## ⚪️ Features

- Customizable button colors and text
- Responsive design
- Easy to integrate with existing websites
- Compatible with Webflow projects

## ⚪️ Installation

### For Personal Website Projects

1. Download the following files from this repository:
   - `styles.css`
   - `script.js`

2. Include these files in your HTML:

   ```html
   <link rel="stylesheet" href="path/to/styles.css">
   <script src="path/to/script.js" defer></script>
   ```

3. Add the following HTML structure to your page:

   ```html
   <button id="openMenuBtn" class="open-menu-btn">Open Menu</button>

   <div id="floatingMenu" class="floating-menu">
     <div class="menu-container">
       <!-- Menu buttons will be dynamically added here -->
     </div>
   </div>
   ```

### For Webflow Projects

1. In your Webflow project, go to the project settings and find the "Custom Code" section.

2. In the "Head Code" area, paste the contents of `styles.css` wrapped in `<style>` tags.

3. In the "Footer Code" area, paste the contents of `script.js` wrapped in `<script>` tags.

4. In the Webflow Designer, add a button element where you want the "Open Menu" button to appear. Give it the class `open-menu-btn` and set its ID to `openMenuBtn`.

5. Add an embed element at the end of your body section and paste the following HTML:

   ```html
   <div id="floatingMenu" class="floating-menu">
     <div class="menu-container">
       <!-- Menu buttons will be dynamically added here -->
     </div>
   </div>
   ```

## ⚪️ Customization

To customize the menu buttons, modify the `buttons` array in the JavaScript file:

```javascript
const buttons = [
  { href: "#", text: "Option 1", bgColor: "#FF5733", textColor: "#FFFFFF" },
  { href: "#", text: "Option Two...", bgColor: "#33FF57", textColor: "#000000" },
  { href: "#", text: "Option 3", bgColor: "#3357FF", textColor: "#FFFFFF" },
  { href: "#", text: "Option Four", bgColor: "#F3FF33", textColor: "#000000" },
];
```

Adjust the `href`, `text`, `bgColor`, and `textColor` values as needed for each button.

## ⚪️ Styling

The component is designed to inherit styles from your existing project. In Webflow, you can further customize the appearance by:

1. Styling the `.open-menu-btn` class for the opening button.
2. Modifying the `.menu-button` class in the custom CSS to change the general appearance of the menu buttons.

For personal projects, you can edit the `styles.css` file directly to change the appearance of the menu and buttons.

## ⚪️ Browser Compatibility

This component is compatible with modern browsers including Chrome, Firefox, Safari, and Edge.

## ⚪️ Support

If you encounter any issues or have questions, please open an issue in this repository.

## ⚪️ License

This project is open source and available under the [MIT License](LICENSE).
