
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

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    form.reset();
    status.innerText = "✅ Thanks for your message! I’ll get back to you shortly.";
  } else {
    status.innerText = "❌ Oops! Something went wrong. Please try again.";
  }
});
