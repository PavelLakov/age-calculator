# Age Calculator

A simple, responsive **Age Calculator** built with **HTML, CSS, and vanilla JavaScript**.  
Select a birth date and click **Calculate** to display age in **years, months, and days**.

---

## Features

- Date input with **future dates disabled**
- Calculates age in **years / months / days**
- Clean UI and easy-to-read result output
- No frameworks, no build tools — just open and run

---

## Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**

---

## Project Structure

```
age-calculator/
├─ index.html
├─ style.css
└─ index.js
```

---

## Getting Started (Local)

### 1) Clone the repository

```bash
git clone https://github.com/<your-username>/age-calculator.git
cd age-calculator
```

### 2) Run locally

You can run it in any of these ways:

- **Double-click** `index.html` to open it in your browser
- Use **VS Code Live Server**:
  - Install the “Live Server” extension
  - Right-click `index.html` → **Open with Live Server**

---

## Usage

1. Choose your birth date in the date picker.
2. Click **Calculate**.
3. The result appears under the input.

---

## Common Issues & Fixes

### Button click does nothing
- Make sure the button has an `id="btn"` and the script is loaded:
  - `index.html` includes: `<script src="index.js"></script>` (near the end of `<body>`)
- Ensure `index.js` contains an event listener:
  - `btn.addEventListener("click", calculateAge);`

### Nothing shows on the page
- Ensure there is an element like `<p id="result"></p>` in the HTML
- Check the browser console (F12 → Console) for errors

---

## Deployment

### GitHub Pages
1. Push your code to GitHub.
2. Go to **Settings → Pages**
3. Under **Build and deployment**, select:
   - Source: **Deploy from a branch**
   - Branch: **main** (or master) and **/root**
4. Save — GitHub Pages will provide a live URL.

### Netlify
- Drag and drop the project folder into Netlify  
  **or**
- Connect the GitHub repo and deploy (no build command required).

---

## Roadmap (Optional Ideas)

- Show next birthday countdown
- Add time-of-day precision (hours/minutes)
- Add a reset button

---

## License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute.

---

## Author

**Pavel Lakov**  
- GitHub: https://github.com/PavelLakov
