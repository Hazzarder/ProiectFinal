var menulist = document.getElementById("menulist");

menulist.style.maxHeight = "0px";
function togglememenu(){
 if(menulist.style.maxHeight == "0px")
 {
     menulist.style.maxHeight = "170px";
 }
 else
 {
     menulist.style.maxHeight = "0px";
 }


}
