const fetchPhotos = async (searchQuery) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?page=2&query=${searchQuery}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Client-ID zXC58LR2buCcnBJxOvcbwD4by-Lu5lKajnB3Soy9KYA',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    const photos = data.results;
    return photos;
  };
  
  export default fetchPhotos;
  