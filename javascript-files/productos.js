//DECLARACÍON DE LAS VARIABLES GLOBALES PARA EL CARRITO
const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
})
const buyButton = document.querySelector('.buyButton');
buyButton.addEventListener('click', buyButtonClicked);
const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');
//INICIALIZACIÓN DE LOS ELEMENTOS JS DE MATERIALIZE
//INICIALIZACIÓN DE TOOLTIPPED
document.addEventListener('DOMContentLoaded', () =>{
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
})
//INICIALIZACIÓN DE SCROLLSPY
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems,{
        throttle: 6
    });
});
//INCIA LA PARTE CARRITO
function addToCartClicked(event){
    const button = event.target;
    const item = button.closest('.box');
    const itemTitle = item.querySelector('.itemTitle').textContent;
    const itemPrice = item.querySelector('.itemPrice').textContent;
    const itemImage = item.querySelector('.itemImage').src;
    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}
function addItemToShoppingCart(itemTitle, itemPrice, itemImage){
    const newItemRow = document.createElement('div');
    const shoppingCartContent =
`<div class="row container shoppingCartItem">
    <div class="section">
        <div class="col s6">
            <div class="center section">
                <img src=${itemImage} class="left itemImage">
                <h5 class="itemTitle">${itemTitle}</h5>
            </div>
        </div>
        <div class="col s2">
            <div class="center section">
                <h5 class="itemPrice">${itemPrice}</h5>
            </div>
        </div>
        <div class="input-fild col s4">
            <div class="center section">
                <input type="number" value="1" class="itemQuantity">
            </div>
        </div>
    </div>
</div>`;
    newItemRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(newItemRow);
    newItemRow.querySelector('.itemQuantity').addEventListener('change', quantityChanged);
    updateTotalPrice()
}
function updateTotalPrice(){
    let total = 0;
    const totalPrice = document.querySelector('.totalPrice');
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
    shoppingCartItems.forEach((shoppingCartItem) => {
        const shoppingCartItemElement = shoppingCartItem.querySelector('.itemPrice');
        const shoppingCartItemPrice = Number(shoppingCartItemElement.textContent.replace('$', ''));
        const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.itemQuantity');
        const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);
        total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    })
    totalPrice.innerHTML = `$${total}`;
}
function quantityChanged(event){
    const input = event.target;
    if (input.value <= 0 ){
        input.value = 1;
    }
    updateTotalPrice();
}
function buyButtonClicked(){
    shoppingCartItemsContainer.innerHTML =
    `<div id="carrito" class="scrollspy shoppingCartItemsContainer">
    <div class="row">
       <div class="container">
            <div class="col s12">
                <div clas="container section">
                    <div class="col s6">
                        <h5 class="center">Producto</h5>
                        <div class="divider"></div>
                    </div>
                    <div class="col s2">
                        <h5 class="center">Precio</h5>
                        <div class="divider"></div>
                    </div>
                    <div class="col s4">
                        <h5 class="center">Cantidad</h5>
                        <div class="divider"></div>
                    </div>
                </div>
            </div>
            <div class="shoppingCartItemsContainer">
            </div>
        </div>
    </div>
    </div>`;
    updateTotalPrice();
}