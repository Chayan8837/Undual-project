# E-Commerce Application

This is an e-commerce application built using React, Redux, and the Dummy JSON API. The app allows users to browse products by categories, search for specific items, and manage a wishlist. It fetches product data dynamically, implements pagination, and provides a good user experience.

## Features

- **Category Selection**: Users can view and select product categories. The "All" category displays products from all categories.
- **Product Listing**: Products are fetched in batches of 10 and displayed on the page. Users can load more products with a button click.
- **Search Functionality**: Users can search for products using a search bar.
- **Dynamic URL Query Parameters**: Selected category and search input are stored as query parameters for better state management and navigation.
- **Responsive Design**: The application is designed to be responsive, ensuring a good experience on both mobile and desktop devices.

## Technical Requirements

- Functional components are used throughout the application.
- Redux is utilized to manage and retrieve product and category data.
- Pagination is implemented to fetch data in batches rather than all at once.
- The application uses Tailwind CSS for styling, providing a modern UI.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
