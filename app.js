'use strict';
let flowersArr=["Alstroemerias","Gardenias","Orchids","Roses","Sunflowers","Tulips","Peonies"];
let category= document.getElementById("images");
let table=document.getElementById('table');
//add option
for (let i=0;i<flowersArr.length;i++){
    let option=document.createElement('option');
    option.value=flowersArr[i];
    option.textContent=flowersArr[i];
    category.appendChild(option);

}
function Flowers(name,img,seasone){
    this.name=name;
    this.img="./img/"+img+".jpeg";
    this.seasone=seasone;
    Flowers.all.push(this);
}
Flowers.all=[];
Flowers.prototype.render=function(){
    
}
function Cart(items){
    this.items=items;
}
Cart.prototype.addFlower=function(name,img,seasone){
    let flower=new Flowers(name,img,seasone);
    this.items.push(flower);
}
Cart.prototype.removFlower = function(index){
    this.items.splice(index,1);
}
Cart.prototype.render=function(){
   
}
let cart =new Cart([]);
function showCart(){
    for(let i=0;i<cart.items.length;i++){
        let tr=document.createElement('tr');
        table.appendChild(tr);
        let xtd=document.createElement('td');
        tr.appendChild(xtd);
        xtd.textContent='X';
        xtd.id=i;
        xtd.classList.add('remove');

        let itd=document.createElement('td');
        tr.appendChild(itd);
        let imgtd=document.createElement('img');
        imgtd.src=cart.items[i].img;
        itd.appendChild(imgtd);

        let ntd=document.createElement('td');
        tr.appendChild(ntd);
        ntd.textContent=cart.items[i].name;

        let std=document.createElement('td');
        tr.appendChild(std);
        std.textContent=cart.items[i].seasone;
    }
}
function clearCart(){
    table.textContent='';
}
let form=document.getElementById('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    let name=event.target.name.value;
    let img=event.target.images.value;
    let seasone=event.target.season.value;
    console.log('event');
    cart.addFlower(name,img,seasone);
    
    clearCart()
    showCart();
    
});

table.addEventListener('click',function(event){
    event.preventDefault();
    if(event.target.classList.contains('remove')){
        cart.removFlower(event.target.id);
        clearCart()
        showCart();

    }
});