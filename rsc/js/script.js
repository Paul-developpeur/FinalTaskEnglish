const btn = document.querySelector('.btn');
const numberofproduct = document.querySelector('#addProduct');

let num = 0;

window.onload = () => {

    btn.onclick = () => {
        num++;
        console.log(num);
        numberofproduct.innerHTML = "Product: " + num;
    }

}