import { films } from "./assets/films.js";
import { starships } from "./assets/starships.js";

export const aboutMixin = {
    data: function() {
      return {
      allFilms: films,
      starships
      }
    },
    filters: {
      allCaps(value) {
        return value.toUpperCase();
      }
    }
  }