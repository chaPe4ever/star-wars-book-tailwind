import { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';
import FavoritePilots from '../Pilots/FavoritePilots';
import Pilots from '../Pilots/Pilots';
import Starships from '../Starships/Starships';
import { fetchMovies, fetchStarship } from '../../utils/api';

const StarWars = () => {
  // Star

  // Movies State
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isMovieCardLoading, setIsMovieCardLoading] = useState(false);

  // Starships State
  const [starships, setStarships] = useState([]);
  const [selectedStarshipId, setSelectedStarshipId] = useState(null);
  const [isStarshipLoading, setIsStarshipLoading] = useState(false);

  // Pilots State
  const [pilots, setPilots] = useState([]);
  const [favoritePilots, setFavoritePilots] = useState([]);

  useEffect(() => {
    async function fetchMoviesAsync() {
      try {
        const movies = await fetchMovies();
        setMovies(movies);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchMoviesAsync();
  }, []);

  // Movies logic
  function handleMovieCardClick(movie) {
    // Clear any selected card state
    setStarships([]);
    setSelectedStarshipId(null);
    setPilots([]);

    setIsMovieCardLoading(true);

    Promise.all(
      movie.starships.map((starshipUrl) => fetchStarship({ url: starshipUrl }))
    )
      .then((starships) => {
        setSelectedMovieId(movie.episodeId);
        setStarships([...starships]);
      })
      .catch((e) => alert(e.message))
      .finally(() => setIsMovieCardLoading(false));
  }

  // Starships logic
  function handleStarshipCardClick(starship) {
    const pilots = starship.pilots;
    setIsStarshipLoading(true);

    if (pilots && pilots.length > 0) {
      Promise.all(pilots.map((pilotUrl) => fetchStarship({ url: pilotUrl })))
        .then((pilots) => {
          // There is no id in starship model so decided to use the name instead
          setSelectedStarshipId(starship.name);
          setPilots([...pilots]);
        })
        .catch((e) => alert(e.message))
        .finally(() => setIsStarshipLoading(false));
    } else {
      alert('There are not pilots to show for this pilots another starship!');
    }
  }

  // Pilots logic
  function handleAddPilotToFavoritesClick(pilot) {
    if (!favoritePilots.includes(pilot)) {
      setFavoritePilots([...favoritePilots, pilot]);
    }
  }

  function handleRemovePilotFromFavoritesClick(pilot) {
    setFavoritePilots([...favoritePilots.filter((p) => p.name !== pilot.name)]);
  }

  return (
    <main className="flex justify-evenly gap-4">
      <Movies
        className="flex-1"
        movies={movies}
        handleMovieCardClick={handleMovieCardClick}
        selectedMovieId={selectedMovieId}
        isLoading={isMovieCardLoading}
      />
      <Starships
        className="flex-1"
        starships={starships}
        handleStarshipCardClick={handleStarshipCardClick}
        selectedStarshipId={selectedStarshipId}
        isLoading={isStarshipLoading}
      />
      <Pilots
        className="flex-1"
        pilots={pilots}
        handleAddPilotToFavoritesClick={handleAddPilotToFavoritesClick}
      />
      <FavoritePilots
        className="flex-1"
        favoritePilots={favoritePilots}
        handleRemovePilotFromFavoritesClick={
          handleRemovePilotFromFavoritesClick
        }
      />
    </main>
  );
};

export default StarWars;
