// Recuperation des travaux

fetch('http://localhost:5678/api/works')
  .then(response => response.json())
  .then(data => {
    const galleryDiv = document.querySelector('.gallery') // Remplacer par votre sélecteur
    data.forEach(work => {
      const figure = document.createElement('figure')
      const img = document.createElement('img')
      const figcaption = document.createElement('figcaption')

      img.src = work.imageUrl
      img.alt = work.title
      figcaption.textContent = work.title

      figure.appendChild(img)
      figure.appendChild(figcaption)
      galleryDiv.appendChild(figure)
    })
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des données:', error)
  })
