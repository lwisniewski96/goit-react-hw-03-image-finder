import React, { useState } from 'react';
import Searchbar from './Searchbar'; // Importujemy Searchbar
import ImageGallery from './ImageGallery'; // Importujemy ImageGallery
import Button from './Button';

export const App = () => {
  const [images, setImages] = useState([]); // Tutaj przechowujemy obrazy

  // Funkcja do ustawiania obrazów po otrzymaniu odpowiedzi z API
  const handleSearch = newImages => {
    setImages(newImages);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSearch} />{' '}
      {/* Przekazujemy funkcję onSubmit do Searchbar */}
      <ImageGallery images={images} />{' '}
      {/* Przekazujemy listę obrazków do ImageGallery */}
      <Button />
    </div>
  );
};

export default App;

//
