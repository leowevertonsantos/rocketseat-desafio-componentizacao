import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { GenreResponseModel } from './../models/genre.model';
import { Button } from './Button';

interface GenreResponseProps {
  genres: GenreResponseModel[];
  handleChangeGenre: Function;
}

export function SideBar(props: GenreResponseProps) {
  // Complete aqui

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButtonChangeGenre(id: number) {
    setSelectedGenreId(id);
    props.handleChangeGenre(id);
  }

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {props.genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButtonChangeGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
