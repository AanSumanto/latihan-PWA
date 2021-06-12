import CONFIG from "../scripts/global/config";

const createMovieDetailTemplate = (movie) => `
<h2 class="movie_title">${movie.title}</h2>
<img class="movie_poster" 
    src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" 
    alt="${movie.title} />
<div class="movie_info">
<h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.tagline}</p>
    <h4>Release Data</h4>
    <p>${movie.release_date}</p>
    <h4>Duration</h4>
    <p>${movie.runtime} minutes </p>
    <h4>Rating</h4>
    <p>${movie.vote_average}</p>
    </div>
    <div class="movie_overview">
        <h3>Overview</h3>
        <p>${movie.overview}</p>
    </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item_header">
        <img class="movie-item_header__poster" alt="${movie.title}"
            src="${movie.backdrop_path ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="movie-item_header_rating">
            <p>⭐️<span class="movie-item_header_rating_score">${movie.vote_average}</span></p>
        </div>
    </div>
    <div class="movie-item_content">
        <h3><a href="${`/#/detail/${movie.id}`}">${movie.title}</a></h3>
        <p>${movie.overview}</p>
    </div>
  </div>
  `;

const creteLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

 
export { createMovieItemTemplate, createMovieDetailTemplate, creteLikeButtonTemplate, createLikedButtonTemplate };