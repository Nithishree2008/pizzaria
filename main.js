menu_list_array=["Chicken thandoori pizza","Veg supreme pizza","paneer tikka pizza","deluxe veggie pizza","veg extravaganaza pizza"];

function getmenu(){
    var pizza;
    pizza="<ol class='menulist'>"
    menu_list_array.sort();
for(var i=0;i<menu_list_array.lenght;i++){
    pizza =pizza+"<li>"+menu_list_array[i]+"</li>"
    

}
pizza=pizza+'</ol>'
document.getElementById("display_menu").innerHTML=pizza;

}
function add_item(){
    var pizza;
    var list=document.getElementById("add_item").Value;
    menu_list_array.push(list);
    menu_list_array.sort();
    pizza="<section class='cards'>"
    for(var i=0;i<menu_list_array.lenght;i++){
        pizza=pizza+'<div class="card">'+'<img src="images/pizzaImg.png"/>'+menu_list_array[i]+'</div>'
    }
    pizza=pizza+"</section>"
    document.getElementById("display_addedmenu").innerHTML=pizza;

}
