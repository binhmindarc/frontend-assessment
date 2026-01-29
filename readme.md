# Frontend Assessment Project

## Project Overview
This project is a Reactjs application that includes two main exercises:
1. A responsive page implementation based on designs
2. A tabs and accordion component that displays content from a JSON file

## Live Deployment
The project is deployed and can be accessed at:
https://binhmindarc.pages.dev/

## Technology Stack
- Reactjs
- Tailwind CSS
- CSS for custom styling

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone <repository-url>
cd frontend-assessment
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. The application should now be running at [http://localhost:5173](http://localhost:5173)

## URLs
- Home page: [http://localhost:5173/](http://localhost:5173/)
- Exercise 1: [http://localhost:5173/exercise1](http://localhost:5173/exercise1)
- Exercise 2: [http://localhost:5173/exercise2](http://localhost:5173/exercise2)

### Deployed URLs
- Home page: [https://binhmindarc.pages.dev/](https://binhmindarc.pages.dev/)
- Exercise 1: [https://binhmindarc.pages.dev/exercise1](https://binhmindarc.pages.dev/exercise1)
- Exercise 2: [https://binhmindarc.pages.dev/exercise2](https://binhmindarc.pages.dev/exercise2)

## Project Structure
- `/src` - Main source code
  - `/assets` - CSS and image assets
  - `/components` - Reusable React components
  - `/pages` - Page-level React components for routing (e.g. Home, Exercise 1, Exercise 2)
  - `/data/data.js` - Data source for Exercise 1, Exercise 2


## Features

### Exercise 1: Responsive Page
- Fully responsive design
- Matches provided design specifications

### Exercise 2: Tabs & Accordion
- Desktop: Tab interface that displays content from data.json
- Mobile: Accordion interface that transforms the tabs
- Responsive behavior based on screen size
- Smooth animations and transitions
- Only one tab/accordion item open at a time
- The first tab/accordion opens by default

### Responsive Design
The application uses a mobile-first approach with breakpoints at:
- Mobile: < 768px (accordion view in Exercise 2)
- Desktop: ≥ 768px (tabs view in Exercise 2)

## Bonus: JavaScript Quirk Explanation

Why is the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` "banana"?

This expression evaluates to "banana" because:

1. 'b' + 'a' = "ba" (string concatenation)
2. The unary plus operator (+ 'a') = NaN (tries to convert 'a' to a number but fails, resulting in NaN)
3. "ba" + NaN = "baNaN" (NaN is coerced to the string "NaN")
4. "baNaN" + 'a' = "baNaNa" (string concatenation)
5. "baNaNa".toLowerCase() = "banana" (converts to lowercase)

It's a quirky result due to JavaScript's type coercion and the way the unary plus operator works!
