const token = ''; 
const username = 'dredevs'; 

    fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
            'Authorization': `token ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const repoList = document.getElementById('repo-list');
        data.forEach(repo => {
            const repoItem = document.createElement('div');
            repoItem.className = 'repo-item';
            repoItem.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description || 'No description available.'}</p>
                <div class="repo-stats">
                    <span class="repo-stat"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span class="repo-stat"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                </div>
            `;
            repoList.appendChild(repoItem);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));

