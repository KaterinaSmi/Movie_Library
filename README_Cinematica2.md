# Overview
This is a Movie Library application that allows users to explore and search for movies and TV shows. It includes several pages that display various types of movie content, including current releases, popular films, and top-rated shows.



# Pages
In the project directory, you can see:

### Home

The Home page serves as the entry point to the application. It showcases featured content and provides access to various categories of movies and TV shows.

Features:

Welcome Section: A welcome message introducing users to the application.
Featured Content: Displays popular and top-rated movies and TV shows.
Search Bar: Allows users to search for movies and TV shows. (Note: Fetch suggestions feature is currently disabled.)

### Now Playing

The Now Playing page displays movies that are currently showing in theaters.

Features:

Search Results: If a search query is entered, matching movies are displayed.
Display Items: Shows a list of movies currently playing in theaters with pagination controls.


### Popular

The Popular page highlights popular movies and TV shows.

Features:

Search Results: Displays movies matching the search query.
Display Items:
Popular Shows: Shows popular TV shows.
Popular Movies: Shows popular movies.

### TV Shows

The TV Shows page focuses on television content, including top-rated and popular TV shows.

Features:

Search Results: Displays TV shows matching the search query.
Display Items:
Now Playing Shows: Shows TV shows currently airing.
Top Rated Shows: Shows top-rated TV shows.

# Installation
Clone the Repository:
    git clone <repository-url>


Navigate to the Project Directory:
    cd <project-directory>

Install Dependencies:
    npm install

Start the Development Server:   
    npm start

The application will be available at http://localhost:3000.

# Usage
Navigate Through Pages: Use the navigation menu to switch between Home, Now Playing, Popular, and TV Shows pages.
Search for Movies/TV Shows: Use the search bar to find specific movies or TV shows.
View Details: Click on movie or TV show posters to view more details.

# API Integration
The application uses the TMDb (The Movie Database) API for fetching movie and TV show data.

API Endpoints Used:
## Now Playing Movies:
https://api.themoviedb.org/3/movie/now_playing
## Popular Movies: 
https://api.themoviedb.org/3/movie/popular
## Top Rated Movies: 
https://api.themoviedb.org/3/movie/top_rated
## Upcoming Movies: 
https://api.themoviedb.org/3/movie/upcoming
## Popular TV Shows: 
https://api.themoviedb.org/3/tv/popular
## Top Rated TV Shows: 
https://api.themoviedb.org/3/tv/top_rated

# Contact
For any inquiries or support, please contact katja.smirnovaa@gmaill.com
