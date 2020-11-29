const getUserData = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}`);
    const data = await api_call.json();
    return data
};

const logUserData = (user) => {
    getUserData(user).then((data)=> {
        document.querySelector("#username").textContent = (data.name) ? data.name : 'No-Username';
        document.querySelector("#bio").textContent = (data.bio) ? data.bio : 'No-Userbio';
        document.querySelector("#follower-count").textContent = data.followers;
        document.querySelector("#following-count").textContent = data.following;
        document.querySelector("#public-repos").textContent = data.public_repos;
        document.querySelector('#avatar_url').src = data.avatar_url;
    });
};

document.querySelector("#search-button").addEventListener("click", ()=> {
    var user = document.querySelector("#search-field").value;
    if (user) {
        logUserData(user);
    }
});


