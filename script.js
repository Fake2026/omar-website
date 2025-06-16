
document.addEventListener("DOMContentLoaded", () => {
  const portfolioSection = document.getElementById("portfolio");
  const githubUsername = "Fake2026";

  fetch(`https://api.github.com/users/${githubUsername}/repos`)
    .then(response => response.json())
    .then(repos => {
      if (!Array.isArray(repos)) return;

      const list = document.createElement("ul");
      repos.forEach(repo => {
        const item = document.createElement("li");
        item.innerHTML = `<strong>${repo.name}</strong> – ${repo.description || "No description"} <a href="${repo.html_url}" target="_blank">View</a>`;
        list.appendChild(item);
      });

      portfolioSection.appendChild(list);
    })
    .catch(err => {
      portfolioSection.innerHTML = "<p>Failed to load portfolio from GitHub.</p>";
      console.error(err);
    });
});
