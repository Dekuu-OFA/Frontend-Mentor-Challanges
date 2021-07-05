const toggle = document.querySelector(".toggle");
const basicprice = document.getElementById("basic-monthly");
const intprice = document.getElementById("int-monthly");
const proprice = document.getElementById("pro-monthly");

toggle.addEventListener("change", ()=>{
    if(toggle.checked){
        basicprice.innerHTML = '&dollar;199.99';
        intprice.innerHTML = '&dollar;249.99';
        proprice.innerHTML = '&dollar;399.99';
    }
    else
    {
        basicprice.innerHTML = '&dollar;19.99';
        intprice.innerHTML = '&dollar;24.99';
        proprice.innerHTML = '&dollar;39.99';
    }
})