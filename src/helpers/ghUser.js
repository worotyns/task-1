export default function getUsers(input) {
  return fetch("https://api.github.com/search/users?q=" + input + " in:login")
    .then(response => response.json())
    .then(json => json.items.slice(0, 30).map((user) => user.login));
}