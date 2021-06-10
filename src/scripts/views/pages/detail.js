import { createMovieDetailTemplate } from "../../../templates/template-creator";
import TheMovieDbSource from "../../data/themoviedb-source";
import UrlParser from "../../routes/url-parser";

const Detail = {
    async render() {
        return `
            <div id="movie" class="movie"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const movie = await TheMovieDbSource.detailMovie(url.id);
        const moviesContainer = document.querySelector('#movie');
        moviesContainer.innerHTML = createMovieDetailTemplate(movie);
    },
};

export default Detail
