import { GenreResponseModel } from '../models/genre.model';
import { MovieModel } from '../models/movie.model';
import { MovieCard } from './MovieCard';

interface GenreMoviesProps {
  selectedGenre: GenreResponseModel;
  movies: MovieModel[];
}

export function Content(props: GenreMoviesProps) {
  // Complete aqui

  return (
    <div className='container'>
      <header>
        <span className='category'>
          Categoria:<span> {props?.selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className='movies-list'>
          {props?.movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
