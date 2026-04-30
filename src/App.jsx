import { useEffect, useRef, useState } from "react";
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

const GENRE_COLORS = {
  "Acción": "#e50914",
  "Drama": "#a855f7",
  "Animación": "#3b82f6",
  "Comedia": "#f59e0b",
  "Terror": "#dc2626",
  "Ciencia ficción": "#10b981",
  "Fantasía": "#ec4899",
  "Musical": "#f97316",
};

function getThumbUrl(trailerUrl) {
  const id = trailerUrl.split("/embed/")[1]?.split("?")[0];
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function HighlightedText({ text, query }) {
  if (!query.trim()) return <>{text}</>;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="highlight">{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
}

function TrailerModal({ movie, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const color = GENRE_COLORS[movie.genre] || "#e50914";

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button className="modalClose" onClick={onClose} aria-label="Cerrar">✕</button>
        <iframe
          src={`${movie.trailer}?autoplay=1`}
          title={movie.title}
          allowFullScreen
          allow="autoplay"
        />
        <div className="modalInfo">
          <span className="modalBadge" style={{ backgroundColor: color }}>
            {movie.genre}
          </span>
          <h2 className="modalTitle">{movie.title}</h2>
          <p className="modalMeta">{movie.year} · Tráiler oficial</p>
        </div>
      </div>
    </div>
  );
}

function MovieCard({ movie, isActive, query, onOpen }) {
  const color = GENRE_COLORS[movie.genre] || "#e50914";
  const thumb = getThumbUrl(movie.trailer);

  return (
    <button
      className={`nfCard ${isActive ? "nfCardActive" : ""}`}
      onClick={onOpen}
      style={{ "--genre-color": color }}
    >
      <img
        className="nfCardImg"
        src={thumb}
        alt={movie.title}
        loading="lazy"
      />
      <div className="nfCardOverlay">
        <div className="nfCardInfo">
          <span className="nfCardTitle">
            <HighlightedText text={movie.title} query={query} />
          </span>
          <span className="nfCardMeta">
            {movie.year} · {movie.genre}
          </span>
        </div>
      </div>
    </button>
  );
}

function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [modalMovie, setModalMovie] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [selectedYear, setSelectedYear] = useState("Todos");
  const [sortBy, setSortBy] = useState("relevance");
  const searchRef = useRef(null);

  const years = [
    "Todos",
    ...[...new Set(movies.map((m) => m.year))].sort((a, b) => b - a),
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isFiltering = searchText.trim() !== "" || selectedYear !== "Todos";

  const filteredMovies = movies
    .filter((movie) => {
      const matchesTitle = movie.title
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const matchesYear =
        selectedYear === "Todos" || movie.year === Number(selectedYear);
      return matchesTitle && matchesYear;
    })
    .sort((a, b) => {
      if (sortBy === "az") return a.title.localeCompare(b.title);
      if (sortBy === "za") return b.title.localeCompare(a.title);
      if (sortBy === "newest") return b.year - a.year;
      if (sortBy === "oldest") return a.year - b.year;
      return 0;
    });

  const genres = [...new Set(movies.map((m) => m.genre))];
  const heroColor = GENRE_COLORS[selectedMovie.genre] || "#e50914";

  function openMovie(movie) {
    setSelectedMovie(movie);
    setModalMovie(movie);
  }

  return (
    <div className="nfApp">
      {/* MODAL */}
      {modalMovie && (
        <TrailerModal movie={modalMovie} onClose={() => setModalMovie(null)} />
      )}

      {/* NAVBAR */}
      <nav className="nfNav">
        <div className="nfNavLogo">
          <span className="nfLogoMark">PF</span>
          <span className="nfLogoName">PaolaFilmCat</span>
        </div>

        <div className="nfNavControls">
          <div className="nfSearchBox">
            <svg
              className="nfSearchIcon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={searchRef}
              type="text"
              placeholder="Buscar... (Ctrl+K)"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="nfSearchInput"
            />
            {searchText && (
              <button
                className="nfClearBtn"
                onClick={() => setSearchText("")}
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="nfSelect"
          >
            {years.map((y) => (
              <option key={y} value={y}>
                {y === "Todos" ? "Año" : y}
              </option>
            ))}
          </select>

          {isFiltering && (
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="nfSelect"
            >
              <option value="relevance">Ordenar</option>
              <option value="az">A → Z</option>
              <option value="za">Z → A</option>
              <option value="newest">Más reciente</option>
              <option value="oldest">Más antiguo</option>
            </select>
          )}

          {isFiltering && (
            <button
              className="nfResetBtn"
              onClick={() => {
                setSearchText("");
                setSelectedYear("Todos");
                setSortBy("relevance");
              }}
            >
              Limpiar
            </button>
          )}
        </div>
      </nav>

      {/* HERO */}
      {!isFiltering && (
        <section className="nfHero">
          <div
            className="nfHeroGlow"
            style={{
              background: `radial-gradient(ellipse at 70% 40%, ${heroColor}2e 0%, transparent 65%)`,
            }}
          />
          <div className="nfHeroContent">
            <span className="nfHeroBadge" style={{ backgroundColor: heroColor }}>
              {selectedMovie.genre}
            </span>
            <h1 className="nfHeroTitle">{selectedMovie.title}</h1>
            <p className="nfHeroMeta">{selectedMovie.year} · Tráiler oficial</p>
            <button
              className="nfHeroPlayBtn"
              style={{ "--hc": heroColor }}
              onClick={() => setModalMovie(selectedMovie)}
            >
              ▶ Ver tráiler
            </button>
          </div>
          <div className="nfHeroEmbed">
            <img
              className="nfHeroThumb"
              src={getThumbUrl(selectedMovie.trailer)}
              alt={selectedMovie.title}
              onClick={() => setModalMovie(selectedMovie)}
            />
          </div>
        </section>
      )}

      {/* CONTENT */}
      <main className={`nfMain ${isFiltering ? "nfMainSearch" : ""}`}>
        {isFiltering ? (
          <section className="nfResults">
            <h2 className="nfResultsTitle">
              {filteredMovies.length > 0
                ? `${filteredMovies.length} resultado${filteredMovies.length !== 1 ? "s" : ""}`
                : "Sin resultados"}
            </h2>
            {filteredMovies.length === 0 ? (
              <p className="nfEmpty">
                No hay películas que coincidan con tu búsqueda.
              </p>
            ) : (
              <div className="nfGrid">
                {filteredMovies.map((movie) => (
                  <MovieCard
                    key={movie.title}
                    movie={movie}
                    isActive={selectedMovie.title === movie.title}
                    query={searchText}
                    onOpen={() => openMovie(movie)}
                  />
                ))}
              </div>
            )}
          </section>
        ) : (
          genres.map((genre) => (
            <section key={genre} className="nfRow">
              <h2
                className="nfRowLabel"
                style={{ "--c": GENRE_COLORS[genre] || "#e50914" }}
              >
                {genre}
              </h2>
              <div className="nfRowTrack">
                {movies
                  .filter((m) => m.genre === genre)
                  .map((movie) => (
                    <MovieCard
                      key={movie.title}
                      movie={movie}
                      isActive={selectedMovie.title === movie.title}
                      query=""
                      onOpen={() => openMovie(movie)}
                    />
                  ))}
              </div>
            </section>
          ))
        )}
      </main>
    </div>
  );
}

export default App;
