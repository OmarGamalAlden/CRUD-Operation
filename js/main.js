var productName = document.getElementById('productName');
var productPrice = document.getElementById('productPrice');
var productCategory = document.getElementById('productCategoray');
var productDescription = document.getElementById('productDescription');

var allProducts =[];

var myIndex ;

if (localStorage.getItem("Products") != null) {
  allProducts = JSON.parse(localStorage.getItem("Products"));
  displayAllProducts();
}


function addProduct() {

  if (document.getElementById('bttn').innerHTML == "ADD") {

    var product = {
      name : productName.value ,
      price : Number( productPrice.value ) ,
      category : productCategory.value ,
      description : productDescription.value ,
    }
    
    allProducts.push(product);
  
    localStorage.setItem("Products" , JSON.stringify(allProducts));
  
    displayAllProducts();
  
    clearAll();
  }
  else{

    allProducts[myIndex].name = productName.value ;
    allProducts[myIndex].price = Number( productPrice.value ) ;
    allProducts[myIndex].category = productCategory.value ;
    allProducts[myIndex].description = productDescription.value ;

    displayAllProducts();
    clearAll();

    localStorage.setItem("Products" , JSON.stringify(allProducts));

    document.getElementById('bttn').innerHTML="ADD"

  }

}

function displayAllProducts() {
  var cartoona ="";

  for (var i= 0 ; i < allProducts.length ; i++) {
  cartoona = cartoona + `<tr>
  <td>${i + 1}</td>
  <td>${allProducts[i].name}</td>
  <td>${allProducts[i].price}</td>
  <td>${allProducts[i].category}</td>
  <td>${allProducts[i].description}</td>
  <td>
      <button class="btn btn-warning" onclick="updateElement(${i})">UPDATE</button>
  </td>
  <td>
      <button class="btn btn-danger" onclick="deleteElement(${i})">DELETE</button>
  </td>
</tr>`    
  }
  document.getElementById('tbody').innerHTML= cartoona; 
}

function clearAll() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDescription.value = "";
}

function deleteElement(index) {

  allProducts.splice(index , 1);
  displayAllProducts();
  localStorage.setItem("Products" , JSON.stringify(allProducts));

}

function updateElement(index) {
  myIndex = index ;

  productName.value = allProducts[index].name;
  productPrice.value = allProducts[index].price;
  productCategory.value = allProducts[index].category;
  productDescription.value = allProducts[index].description;

  document.getElementById('bttn').innerHTML= "UPDATE";
}

function search(term) {

  var cartoona="";

  for ( var i =0  ;  i < allProducts.length  ; i++  ) {

     if (allProducts[i].name.toLowerCase().includes(term.toLowerCase())) {
      cartoona = cartoona + `<tr>
  <td>${i + 1}</td>
  <td>${allProducts[i].name}</td>
  <td>${allProducts[i].price}</td>
  <td>${allProducts[i].category}</td>
  <td>${allProducts[i].description}</td>
  <td>
      <button class="btn btn-warning" onclick="updateElement(${i})">UPDATE</button>
  </td>
  <td>
      <button class="btn btn-danger" onclick="deleteElement(${i})">DELETE</button>
  </td>
</tr>`
     } 
  }
}
