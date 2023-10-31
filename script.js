let http= new XMLHttpRequest();
http.open('get','products.json',true)
http.send();
http.onload=function(){
    if(this.readyState==4 && this.status==200){
        let products=JSON.parse(this.responseText);
        let output="";
        for(let item of products){
            output +=`
            <div class="product">
           <img src="${item.image}" alt="${item.image}">
           <p class="title">${item.title}</p>
           <p class="description">${item.description}</p>
           <p class="price">
           <span>${item.price}</span>
           <span>&euro;</span>
           </p>
           <p class="cart">Add to cart<i class="fa-solid fa-cart-shopping"></i></p>
      </div>
      `;
        }
        document.querySelector(".products").innerHTML=output;
    }
}
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

 function contact(){
    location.replace("contact.html")
}
function goback(){
    location.replace("index.html")
}
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
