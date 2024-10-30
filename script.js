
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); 
}
document.addEventListener('DOMContentLoaded', function() {
  const searchBar = document.getElementById('search-bar');
  const products = document.querySelectorAll('.judul-produk');

  searchBar.addEventListener('input', function() {
      const searchTerm = searchBar.value.toLowerCase();

      products.forEach(product => {
          const productName = product.textContent.toLowerCase();
          if (productName.includes(searchTerm)) {
              product.parentElement.parentElement.style.display = ''; 
          } else {
              product.parentElement.parentElement.style.display = 'none'; 
          }
      });
  });
});

