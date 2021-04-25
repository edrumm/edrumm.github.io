const url = 'https://api.github.com/users/edrumm/repos';
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

function display(repositories) {

  // ...

  repositories.forEach(repo => {

  });

  // ...

}

fetch(url /* options */)
.then(response => response.json())
.then(reps => {

  let repositories = [];

  reps.forEach(rep => {
      /*
      name,
      description,
      url,
      language,
      stars,
      watchers,
      forks,

      anything else?
      */

    repositories.push(new Repository(/* ... */));
  });

  display(repositories);
})
.catch(err => {
  console.error(err);
  /*
    document.getElementById(...).innerHTML = `Unable to fetch GitHub data - ${err}`;
    set an error message

    "repositories unavailable" etc...
  */
});
