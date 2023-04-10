var btn1 = document.getElementById('btn1');
var fox = document.getElementById('fox');

btn1.addEventListener('click', fetchdata);

async function fetchdata() {
  fetch('https://randomfox.ca/floof')
    .then(response => {
      console.log(response)
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(data => {
      
      const imag=data.image;
      fox.innerHTML = `<img src=${imag} alt="cats" />`
    })
    .catch(error => {
      console.error(error);
    });
}


// https://random-d.uk/api/v2
// const img = document.createElement('img');
// img.src = data.url;
// return img;