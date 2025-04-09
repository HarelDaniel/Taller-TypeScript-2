const series = [
    {
      id: 1,
      name: "Breaking Bad",
      channel: "AMC",
      seasons: 5,
      description: "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White...",
      link: "https://www.amc.com/shows/breaking-bad",
      image: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
      id: 2,
      name: "Orange Is the New Black",
      channel: "Netflix",
      seasons: 6,
      description: "The series begins revolving around Piper Chapman...",
      link: "https://www.netflix.com/title/70242311",
      image: "https://m.media-amazon.com/images/M/MV5BNjRjMTAyYjUtZDk0Mi00OGQ5LWJjNzMtMzBhNDMwMmI5NzVjXkEyXkFqcGc@._V1_.jpg"
    },
    {
        id:3, 
        name: "Game of Thrones",
        channel: "HBO",
        seasons: 7,
        description: "American fantasy drama",
        link: "https://www.hbo.com/game-of-thrones",
        image: "https://m.media-amazon.com/images/M/MV5BMTU2OTg0NTU1M15BMl5BanBnXkFtZTgwMzU1MjMxODE@._V1_.jpg"
    },
    {
        id:4, 
        name: "The Big Bang Theory",
        channel: "CBS",
        seasons: 12,
        description: "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny...",
        link: "https://www.cbs.com/shows/big_bang_theory/about/",
        image: "https://m.media-amazon.com/images/M/MV5BODliNDA1N2MtYThkYy00N2M0LTk1NzAtZTNkNWI2YTdkZjY4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id:5, 
        name: "Sherlock",
        channel: "BBC",
        seasons: 4,
        description: "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London...",
        link: "https://www.bbc.co.uk/programmes/b018ttws",
        image: "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg  "
    },
    {
        id:6, 
        name: "A very English Scandal",
        channel: "BBC",
        seasons: 2,
        description: "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries...",
        link: "https://www.bbc.co.uk/programmes/p065smy4",
        image: "https://m.media-amazon.com/images/M/MV5BOTUyNjBmOTMtYzliNS00NjBiLTkzNzktMDkxMjcyYzVhMGVlXkEyXkFqcGc@._V1_.jpg"
    }
  ];
  
  function renderTable() {
    const tableBody = document.getElementById("series-table");
    tableBody.innerHTML = "";
  
    let totalSeasons = 0;
  
    series.forEach((serie, index) => {
      totalSeasons += serie.seasons;
      const row = document.createElement("tr");
      row.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td><a href="#" class="serie-link" data-id="${serie.id}">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;
      tableBody.appendChild(row);
    });
  
    document.getElementById("average-seasons").innerText = (totalSeasons / series.length).toFixed(2);
  
    // Listeners
    document.querySelectorAll(".serie-link").forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const id = parseInt(e.target.dataset.id);
        const selectedSerie = series.find(s => s.id === id);
        renderCard(selectedSerie);
      });
    });
  }
  
  function renderCard(serie) {
    const cardContainer = document.getElementById("detail-card");
    cardContainer.innerHTML = `
      <div class="card">
        <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <a href="${serie.link}" target="_blank" class="btn btn-primary">Ir a la serie</a>
        </div>
      </div>
    `;
  }
  
  // Init
  renderTable();
  