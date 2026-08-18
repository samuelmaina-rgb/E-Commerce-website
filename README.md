# React E-Commerce Store

A simple e-commerce web application built with **React**. The project demonstrates component-based development, React Router, API data fetching, controlled components, Context API, protected routes, and responsive styling.

## Features

### Component-Based Structure

The application is organized into reusable React components, including:

* Navbar
* Product list
* Product card
* Product details
* Cart
* Search/filter section
* Checkout
* Login
* Home page

Components are separated where appropriate to keep the application organized and reusable.

### Routing

React Router is used for navigation between pages.

The application includes routes for:

- `/` — Home
- `/products` — Products
- `/products/:id` — Product details
- `/cart` — Cart
- `/checkout` — Checkout
- `/login` — Login

Dynamic routing is used for individual product pages.

### Search & Filtering

The products page includes a **controlled search input** managed using React state.

Users can search products by name and see the results update dynamically.

### Controlled Forms

Login and checkout forms use controlled React inputs.

The forms also validate required fields before submission.

### State Management

The **Context API** is used for global application state, including:

* Cart items
* Logged-in user status
* Selected filters

This helps avoid unnecessary prop drilling.

### Data Handling

Product information is fetched from the **Fake Store API**.

The application uses:

- `fetch()`
- `useEffect()`
- `useState()`
- `.map()`

Loading and error states are displayed while fetching data.

### Protected Routes

The checkout page is protected so that only logged-in users can access it.

Unauthenticated users are redirected to the login page.

### Styling

The application is designed to be:

* Clean
* Responsive
* Easy to navigate
* Beginner-friendly

Styling includes spacing, readable typography, hover effects, cards, buttons, and responsive layouts.

## Technologies Used

* React
* JavaScript
* React Router
* Context API
* Tailwind CSS
* Fake Store API
* Vite
* Git & GitHub




## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── SearchFilter.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── Login.jsx
│
├── context/
│   ├── CartContext.jsx
│   └── UserContext.jsx
│
├── App.jsx
└── main.jsx
```


## Deployment

The completed application is deployed using:

- Vercel

## Author

**Sam**

Built as a React e-commerce project to practice modern React development and frontend concepts.

