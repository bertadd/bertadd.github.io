document.getElementById('genreForm').addEventListener('submit', function () {

      const input = document.getElementById('favoriteGenre').value

      if (input === 'alternative') {
        alert("That's my favorite!");
      } else {
        alert('You have good taste!');
      }
    });


   