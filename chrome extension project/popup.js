function generateJoke() {
    const url = "https://official-joke-api.appspot.com/random_joke";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const joke = `${data.setup} ${data.punchline}`;
        document.getElementById("joke").innerHTML = joke;
      })
      .catch(error => {
        console.error(error);
        document.getElementById("joke").innerHTML = "Sorry, an error occurred.";
      });
  }
  
  document.getElementById("generate").addEventListener("click", generateJoke);
  