import { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';
import FavoritePilots from '../Pilots/FavoritePilots';
import Pilots from '../Pilots/Pilots';
import Starships from '../Starships/Starships';
import { fetchMovies, fetchStarship } from '../../utils/api';

const StarWarsPage = () => {
  // Movies State
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [loadingMovieId, setLoadingMovieId] = useState(null);
  const [toggledMovieId, setToggledMovieId] = useState(null);

  // Starships State
  const [starships, setStarships] = useState([]);
  const [selectedStarshipId, setSelectedStarshipId] = useState(null);
  const [loadingStarshipId, setLoadingStarshipId] = useState(null);
  const [toggledStarshipId, setToggledStarshipId] = useState(null);

  // Pilots State
  const [pilots, setPilots] = useState([]);
  const [favoritePilots, setFavoritePilots] = useState([]);
  const [togglePilotId, setTogglePilotId] = useState(null);

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
      setLoadingMovieId(movie.id);

      Promise.all(
        movie.starships.map((starshipUrl) =>
          fetchStarship({ url: starshipUrl })
        )
      )
        .then((starships) => {
          setSelectedMovieId(movie.id);
          setStarships([...starships]);
        })
        .catch((e) => alert(e.message))
        .finally(() => setLoadingMovieId(null));
    }
  }

  function handleMovieCardToggle(e, id) {
    e.stopPropagation();
    if (toggledMovieId === id) {
      setToggledMovieId(null);
    } else {
      setToggledMovieId(id);
    }
  }

  // Starships logic
  function handleStarshipCardClick(starship) {
    const pilots = starship.pilots;

    if (pilots && pilots.length > 0) {
      setLoadingStarshipId(starship.id);

      Promise.all(pilots.map((pilotUrl) => fetchStarship({ url: pilotUrl })))
        .then((pilots) => {
          setSelectedStarshipId(starship.id);
          setPilots([...pilots]);
        })
        .catch((e) => alert(e.message))
        .finally(() => setLoadingStarshipId(null));
    } else {
      alert('There are not pilots to show for this pilots another starship!');
    }
  }

  function handleStarshipCardToggle(e, id) {
    e.stopPropagation();
    if (toggledStarshipId === id) {
      setToggledStarshipId(null);
    } else {
      setToggledStarshipId(id);
    }
  }

  // Pilots logic
  function handleAddPilotToFavoritesClick(pilot) {
    if (!favoritePilots.includes(pilot)) {
      setFavoritePilots([...favoritePilots, pilot]);
    } else {
      alert('The selected pilot is already in your favorite pilots list');
    }
  }

  function handleRemovePilotFromFavoritesClick(pilot) {
    setFavoritePilots([...favoritePilots.filter((p) => p.id !== pilot.id)]);
  }

  function handlePilotCardToggle(e, id) {
    e.stopPropagation();
    if (togglePilotId === id) {
      setTogglePilotId(null);
    } else {
      setTogglePilotId(id);
    }
  }

  return (
    <main className="mx-5 flex h-screen flex-col">
      <nav className="flex justify-evenly gap-4 bg-gray-100 py-2 shadow-md">
        <h1 className="flex-1">Movies</h1>
        <h1 className="flex-1">Starships</h1>
        <h1 className="flex-1">Pilots</h1>
        <h1 className="flex-1">Favorite Pilots</h1>
      </nav>

      <main className="flex-1 overflow-hidden">
        <div className="flex h-full justify-evenly gap-4">
          <Movies
            className="flex-1 overflow-y-auto pr-2"
            movies={movies}
            handleMovieCardClick={handleMovieCardClick}
            selectedMovieId={selectedMovieId}
            loadingMovieId={loadingMovieId}
            toggledMovieId={toggledMovieId}
            handleMovieCardToggle={handleMovieCardToggle}
          />
          <Starships
            className="flex-1 overflow-y-auto px-2"
            starships={starships}
            handleStarshipCardClick={handleStarshipCardClick}
            selectedStarshipId={selectedStarshipId}
            loadingStarshipId={loadingStarshipId}
            toggledStarshipId={toggledStarshipId}
            handleStarshipCardToggle={handleStarshipCardToggle}
          />
          <Pilots
            className="flex-1 overflow-y-auto px-2"
            pilots={pilots}
            handleAddPilotToFavoritesClick={handleAddPilotToFavoritesClick}
            togglePilotId={togglePilotId}
            handlePilotCardToggle={handlePilotCardToggle}
          />
          <FavoritePilots
            className="flex-1 overflow-y-auto pl-2"
            favoritePilots={favoritePilots}
            handleRemovePilotFromFavoritesClick={
              handleRemovePilotFromFavoritesClick
            }
          />
        </div>
      </main>
    </main>
  );
};

export default StarWarsPage;
