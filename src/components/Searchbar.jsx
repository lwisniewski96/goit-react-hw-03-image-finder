// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const Searchbar = ({ onSubmit }) => {
//   const [query, setQuery] = useState('');

//   const handleChange = event => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     // Sprawdzamy, czy wartość inputa (query) nie jest pusta
//     if (query.trim() === '') {
//       return;
//     }

//     // Wpisz swój klucz API z Pixabay
//     const apiKey = '38243697-4b083fe504031d5c0dbe936a5';

//     // Tworzymy łańcuch URL z parametrami dla zapytania do Pixabay API
//     const baseUrl = 'https://pixabay.com/api/';
//     const perPage = 12; // Liczba obrazków na stronie
//     const page = 1; // Numer strony
//     const apiUrl = `${baseUrl}?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

//     // Wywołujemy zapytanie HTTP do Pixabay API za pomocą funkcji fetch
//     fetch(apiUrl)
//       .then(response => {
//         // Sprawdzamy, czy odpowiedź jest poprawna (status 200 OK)
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json(); // Parsujemy odpowiedź do formatu JSON
//       })
//       .then(data => {
//         // Tutaj otrzymujemy dane z API w formacie JSON
//         // Przekazujemy je do komponentu nadrzędnego (onSubmit) lub wykonujemy inne operacje
//         onSubmit(data.hits); // Przykładowo, przekazujemy wyniki do komponentu nadrzędnego
//       })
//       .catch(error => {
//         // Obsługujemy ewentualny błąd
//         console.error('There was a problem with the fetch operation:', error);
//       });

//     // Czyścimy stan inputa po wysłaniu zapytania
//     setQuery('');
//   };

//   return (
//     <header className="searchbar">
//       <form className="form" onSubmit={handleSubmit}>
//         <button type="submit" className="button">
//           <span className="button-label">Search</span>
//         </button>

//         <input
//           className="input"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//           value={query}
//           onChange={handleChange}
//         />
//       </form>
//     </header>
//   );
// };

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Searchbar;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchImages } from '../services/ApiServices'; // Importujemy funkcję fetchImages z naszego serwisu

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    // Sprawdzamy, czy wartość inputa (query) nie jest pusta
    if (query.trim() === '') {
      return;
    }

    try {
      const data = await fetchImages(query, 1); // Wywołujemy funkcję fetchImages

      onSubmit(data.hits);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }

    // Czyścimy stan inputa po wysłaniu zapytania
    setQuery('');
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
