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
.then(repos => {

  let repositories = [];

  repos.forEach(repo => {
    let rdata = {
      /*
      name: repo.name,
      description:
      url:
      language:
      stars:
      watchers:
      forks:

      anything else?
      */
    };

    repositories.push(rdata);
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
