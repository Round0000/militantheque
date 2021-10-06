document.addEventListener("DOMContentLoaded", function (event) {
  const search = document.getElementById("search");
  const results = document.getElementById("results");
  let data = [];
  let search_term = "";

  fetch("/search.json")
    .then((response) => response.json())
    .then((data_server) => {
      data = data_server;
    });

  search.addEventListener("input", (event) => {
    search_term = event.target.value.toLowerCase().trim();
    showList();
  });

  const showList = () => {
    results.innerHTML = "";
    if (document.querySelector(".noresult") || search_term.length <= 0) {
      document.querySelector(".noresult").remove();
    }
    if (search_term.length <= 0) return;
    const match = new RegExp(`${search_term}`, "gi");
    let result = data.filter(
      (query) =>
        match.test(query.title) ||
        match.test(query.source) ||
        match.test(query.extrait) ||
        match.test(query.thematiques) ||
        match.test(query.year) ||
        match.test(query.keywords)
    );
    if (result.length === 0) {
      const li = document.createElement("li");
      li.innerHTML = `Aucun résultat trouvé pour <span class="query">"${search_term}"</span>`;
      li.classList.add("noresult");
      results.appendChild(li);
    }
    result.forEach((e) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${e.lien}" target="_blank" rel="noopener noreferrer" class="item">
            <h2>${e.title}</h2>
            <span>${e.source}</span>
            <p>${e.extrait}</p>
        </a>
      `;
      results.appendChild(li);
    });
  };
});
