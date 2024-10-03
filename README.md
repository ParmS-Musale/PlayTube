# PlayTube 📺

This is a PlayTube project built using **React**, **Redux**, **React-Router**, and **Tailwind CSS**. It features a header with a responsive layout, a search bar with live search suggestions powered by YouTube's API, and a user menu with toggle functionality. The search results are cached to reduce API calls for repeated queries.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Redux Store](#redux-store)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Layout**: The header adjusts dynamically based on screen size.
- **Search with Suggestions**: Fetches real-time suggestions from YouTube’s API and displays them.
- **Debounced API Calls**: Limits the number of API requests by introducing a delay on user input.
- **Caching**: Reduces redundant API calls by caching search results.
- **Menu Toggle**: A sidebar menu that can be toggled with the click of an icon.
- **User Profile Icon**: Placeholder for user-related features.
  
## Tech Stack

- **React**: Front-end UI library.
- **Redux**: For global state management.
- **React-Router-DOM**: For navigation and routing.
- **Tailwind CSS**: For styling the components.
- **YouTube Data API v3**: For fetching search suggestions.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/youtube-clone.git
   cd youtube-clone
