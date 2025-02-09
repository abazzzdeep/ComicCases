const userIcon = document.querySelector('#header .fas.fa-user');

  const navbar = document.querySelector('#header #navbar');


  userIcon.addEventListener('click', function() {

    navbar.classList.toggle('show-navbar');
  });

  function saveText() {
    const inputText = document.getElementById('manualInput').value;
    
    console.log('Entered text:', inputText);

  }

function toggleReadMore(paragraphId, dotsId, moreId, buttonId) {
        var dots = document.getElementById(dotsId);
        var moreText = document.getElementById(moreId);
        var btnText = document.getElementById(buttonId);

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            moreText.style.display = "none";
            btnText.textContent = "Read more";
        } else {
            dots.style.display = "none";
            moreText.style.display = "inline";
            btnText.textContent = "Read less";
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
      const quantityInput = document.querySelector('input[type="number"]');
      
      quantityInput.addEventListener('input', function () {
          let value = parseInt(quantityInput.value);
          if (value < 1) {
              quantityInput.value = 1;
          } else if (value > 15) {
              quantityInput.value = 15;
          }
      });
  });
  