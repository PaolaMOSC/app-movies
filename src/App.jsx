import { useEffect, useState } from "react";
import "./App.css";

const movies = [
  {
    title: "Dune: Part Two",
    year: 2024,
    genre: "Ciencia ficción",
    trailer: "https://www.youtube.com/embed/Way9Dexny3w",
  },
  {
    title: "Inside Out 2",
    year: 2024,
    genre: "Animación",
    trailer: "https://www.youtube.com/embed/LEjhY15eCx0",
  },
  {
    title: "Deadpool & Wolverine",
    year: 2024,
    genre: "Acción",
    trailer: "https://www.youtube.com/embed/73_1biulkYk",
  },
  {
    title: "Oppenheimer",
    year: 2023,
    genre: "Drama",
    trailer: "https://www.youtube.com/embed/uYPbbksJxIg",
  },
  {
    title: "Barbie",
    year: 2023,
    genre: "Comedia",
    trailer: "https://www.youtube.com/embed/pBk4NYhWNMM",
  },
  {
    title: "Wonka",
    year: 2023,
    genre: "Fantasía",
    trailer: "https://www.youtube.com/embed/otNh9bTjXWg",
  },
  {
    title: "Godzilla x Kong: The New Empire",
    year: 2024,
    genre: "Acción",
    trailer: "https://www.youtube.com/embed/qqrpMRDuPfc",
  },
  {
    title: "Kingdom of the Planet of the Apes",
    year: 2024,
    genre: "Ciencia ficción",
    trailer: "https://www.youtube.com/embed/XtFI7SNtVpY",
  },
  {
    title: "Furiosa: A Mad Max Saga",
    year: 2024,
    genre: "Acción",
    trailer: "https://www.youtube.com/embed/XJMuhwVlca4",
  },
  {
    title: "The Fall Guy",
    year: 2024,
    genre: "Acción",
    trailer: "https://www.youtube.com/embed/j7jPnwVGdZ8",
  },
  {
    title: "Civil War",
    year: 2024,
    genre: "Drama",
    trailer: "https://www.youtube.com/embed/aDyQxtg0V2w",
  },
  {
    title: "The Garfield Movie",
    year: 2024,
    genre: "Animación",
    trailer: "https://www.youtube.com/embed/IeFWNtMo1Fs",
  },
  {
    title: "Kung Fu Panda 4",
    year: 2024,
    genre: "Animación",
    trailer: "https://www.youtube.com/embed/_inKs4eeHiI",
  },
  {
    title: "A Quiet Place: Day One",
    year: 2024,
    genre: "Terror",
    trailer: "https://www.youtube.com/embed/YPY7J-flzE8",
  },
  {
    title: "Nosferatu",
    year: 2024,
    genre: "Terror",
    trailer: "https://www.youtube.com/embed/sW4fR8m2bqA",
  },
  {
    title: "Alien: Romulus",
    year: 2024,
    genre: "Terror",
    trailer: "https://www.youtube.com/embed/GTNMt84KT0k",
  },
  {
    title: "Beetlejuice Beetlejuice",
    year: 2024,
    genre: "Comedia",
    trailer: "https://www.youtube.com/embed/CoZqL9N6Rx4",
  },
  {
    title: "Gladiator II",
    year: 2024,
    genre: "Acción",
    trailer: "https://www.youtube.com/embed/4rgYUipGJNo",
  },
  {
    title: "Joker: Folie a Deux",
    year: 2024,
    genre: "Drama",
    trailer: "https://www.youtube.com/embed/xy8aJw1vYHo",
  },
  {
    title: "Mufasa: The Lion King",
    year: 2024,
    genre: "Animación",
    trailer: "https://www.youtube.com/embed/o17MF9vnabg",
  },
  {
    title: "Moana 2",
    year: 2024,
    genre: "Animación",
    trailer: "https://www.youtube.com/embed/hDZ7y8RP5HE",
  },
  {
    title: "Wicked",
    year: 2024,
    genre: "Musical",
    trailer: "https://www.youtube.com/embed/6COmYeLsz4c",
  },
  {
    title: "Twisters",
    year: 2024,
    genre: "Acción",
    trailer: "https://www.youtube.com/embed/7jC9xU0Y4fE",
  },
  {
    title: "The Marvels",
    year: 2023,
    genre: "Acción",
    trailer: "https://www.youtube.com/embed/wS_qbDztgVY",
  },
  {
    title: "Mission: Impossible - Dead Reckoning",
    year: 2023,
    genre: "Acción",
    trailer: "https://www.youtube.com/embed/avz06PDqDbM",
  },
  {
    title: "The Hunger Games: The Ballad of Songbirds & Snakes",
    year: 2023,
    genre: "Acción",
    trailer: "https://www.youtube.com/embed/RDE6Uz73A7g",
  },
  {
    title: "Napoleon",
    year: 2023,
    genre: "Drama",
    trailer: "https://www.youtube.com/embed/OAZWXUkrjPc",
  },
  {
    title: "Poor Things",
    year: 2023,
    genre: "Drama",
    trailer: "https://www.youtube.com/embed/RlbR5N6veqw",
  },
  {
    title: "The Boy and the Heron",
    year: 2023,
    genre: "Animación",
    trailer: "https://www.youtube.com/embed/f7EDFdA10pg",
  },
  {
    title: "Challengers",
    year: 2024,
    genre: "Drama",
    trailer: "https://www.youtube.com/embed/MDnVk5jIJr0",
  },
  {
    title: "The Creator",
    year: 2023,
    genre: "Ciencia ficción",
    trailer: "https://www.youtube.com/embed/ex3C1-5Dhb8",
  },
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? "light" : "dark";
  });
  const clearFilters = () => {
    setSearchText("");
    setSelectedGenre("Todos");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const genres = ["Todos", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesGenre =
      selectedGenre === "Todos" || movie.genre === selectedGenre;

    return matchesTitle && matchesGenre;
  });

  const movieToShow =
    filteredMovies.find((movie) => movie.title === selectedMovie.title) ||
    filteredMovies[0] ||
    null;

  return (
    <div className={`app ${theme}`}>
      <header className="hero">
        <div className="heroTopRow">
          <p className="badge">Catálogo 2024</p>
          <button
            className="themeButton"
            onClick={() =>
              setTheme((currentTheme) =>
                currentTheme === "dark" ? "light" : "dark"
              )
            }
          >
            {theme === "dark" ? "Modo claro" : "Modo oscuro"}
          </button>
        </div>
        <h1>Descubre tu próxima película</h1>
        <p className="subtitle">
          Busca por nombre, filtra por género y reproduce el tráiler al
          instante.
        </p>
      </header>

      <div className="filters">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          className="searchInput"
        />

        <select
          value={selectedGenre}
          onChange={(event) => setSelectedGenre(event.target.value)}
          className="genreSelect"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <button onClick={clearFilters} className="clearButton">
          Limpiar filtros
        </button>
      </div>

      <p className="resultsText">
        {filteredMovies.length === 1
          ? "1 resultado encontrado"
          : `${filteredMovies.length} resultados encontrados`}
      </p>

      <section className="contentLayout">
        <div className="movieListPanel">
          <div className="movies">
            {filteredMovies.map((movie) => (
              <button
                key={movie.title}
                onClick={() => setSelectedMovie(movie)}
                className={`movieButton ${
                  movieToShow?.title === movie.title ? "movieButtonActive" : ""
                }`}
              >
                <span className="movieTitle">{movie.title}</span>
                <span className="movieMeta">
                  {movie.genre} • {movie.year}
                </span>
              </button>
            ))}
          </div>

          {filteredMovies.length === 0 && (
            <p className="emptyState">
              No hay películas que coincidan con tu búsqueda.
            </p>
          )}
        </div>

        {movieToShow && (
          <div className="trailerPanel">
            <div className="trailer">
              <div className="trailerHeader">
                <h2>{movieToShow.title}</h2>
                <span className="trailerGenre">{movieToShow.genre}</span>
              </div>
              <p>{movieToShow.year} • Tráiler oficial</p>

              <iframe
                src={movieToShow.trailer}
                title={movieToShow.title}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;