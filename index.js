document.getElementById('genreForm').addEventListener('submit', function () {

      const input = document.getElementById('favoriteGenre').value

      if (input === 'alternative') {
        alert("that's my favorite");
      } else {
        alert('you have good taste');
      }
    });

const genre = document.querySelector("#genre");
genre.oninput = function (){
    h2.innerText = "I Love " + genre.value;
};
   