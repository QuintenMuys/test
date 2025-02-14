 // Flickr API instellingen
 const flickrAPI = 'https://www.flickr.com/services/rest/';
 const apiKey = '3e97476129764d792c44028dbfedbd81'; // Vervang door je eigen API-sleutel
 const userId = '202327859@N08'; // Vervang door je eigen Flickr-gebruikers-ID
 const albumId = '72177720323824809'; // Vervang door je eigen album-ID

 // De URL voor de API-aanroep
 const apiUrl = `${flickrAPI}?method=flickr.photosets.getPhotos&api_key=${apiKey}&user_id=${userId}&photoset_id=${albumId}&format=json&nojsoncallback=1`;

 // Verkrijg de gegevens van de API
 fetch(apiUrl)
     .then(response => response.json())
     .then(data => {
         const gallery = document.getElementById('gallery');
         
         // Controleer of er foto’s zijn
         if (data.photoset && data.photoset.photo) {
             data.photoset.photo.forEach(photo => {
                 // Genereer de URL voor de afbeelding
                 const photoUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
                 
                 // Maak een nieuw <img> element
                 const imgElement = document.createElement('img');
                 imgElement.src = photoUrl;
                 imgElement.alt = photo.title;
                 
                 // Voeg de afbeelding toe aan de galerij
                 gallery.appendChild(imgElement);
             });
         }
     })
     .catch(error => console.error('Er is een fout opgetreden bij het laden van de fotos:', error));