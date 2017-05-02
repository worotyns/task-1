import { debounce } from 'lodash';

const getUsers = debounce((input, cb) =>
  fetch("https://api.github.com/search/users?q=" + input + " in:login")
    .then(response => response.json())
    .then(json => (json.items || []).slice(0, 30).map((user) => user.login))
    .then(cb), 200);

export default getUsers;