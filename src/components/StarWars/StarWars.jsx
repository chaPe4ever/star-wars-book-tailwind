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
  const [loadingMovieId, setLoadingMovieId] = useState(null);

  // Starships State
  const [starships, setStarships] = useState([]);
  const [selectedStarshipId, setSelectedStarshipId] = useState(null);
  const [loadingStarshipId, setLoadingStarshipId] = useState(null);

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
    // Clear any selected card state to refresh prev selected cards
    setStarships([]);
    setSelectedStarshipId(null);
    setPilots([]);

    if (movie) {
      // There is no id in movie model so decided to use the episodeId instead
      setLoadingMovieId(movie.episodeId);

      Promise.all(
        movie.starships.map((starshipUrl) =>
          fetchStarship({ url: starshipUrl })
        )
      )
        .then((starships) => {
          setSelectedMovieId(movie.episodeId);
          setStarships([...starships]);
        })
        .catch((e) => alert(e.message))
        .finally(() => setLoadingMovieId(null));
    }
  }

  // Starships logic
  function handleStarshipCardClick(starship) {
    const pilots = starship.pilots;

    if (pilots && pilots.length > 0) {
      // There is no id in starship model so decided to use the name instead
      setLoadingStarshipId(starship.name);

      Promise.all(pilots.map((pilotUrl) => fetchStarship({ url: pilotUrl })))
        .then((pilots) => {
          setSelectedStarshipId(starship.name);
          setPilots([...pilots]);
        })
        .catch((e) => alert(e.message))
        .finally(() => setLoadingStarshipId(null));
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
        loadingMovieId={loadingMovieId}
      />
      <Starships
        className="flex-1"
        starships={starships}
        handleStarshipCardClick={handleStarshipCardClick}
        selectedStarshipId={selectedStarshipId}
        loadingStarshipId={loadingStarshipId}
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
