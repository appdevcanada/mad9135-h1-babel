const app = {
  async getFilms() {
    try {
      const response = await fetch('https://swapi.co/api/films/')
      if (response.ok) {
        const { results } = await response.json()
        return results
      }
      return []
    } catch (err) {
      console.error('Whoops ...', err)
    }
  },

  displayList(films) {
    const list = films
      .map(film => {
        return {
          episodeId: film.episode_id,
          title: film.title,
          releaseDate: film.release_date
        }
      })
      .sort((a, b) => a.episodeId - b.episodeId)

    const target = document.getElementById('movie-list')
    const ul = document.createElement('ul')
    list.forEach(film => {
      const li = document.createElement('li')
      li.innerHTML = `
        Episode ${film.episodeId}:
        <strong>${film.title}</strong>
        <em> (released ${film.releaseDate})</em>`
      ul.appendChild(li)
    })
    target.appendChild(ul)
  }
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  app.getFilms().then(app.displayList)
}
