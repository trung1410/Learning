function B1Function(){
    let input = Math.random().toString(36).substring(2,7);
    alert(input);
}
function B2Function(){
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    alert(`Họ và tên: ${firstName} ${lastName}`)
}
function B3Function(){
    let nhapa = prompt("Mời bạn nhập giá trị của a!");
    let nhapb = prompt("Mời bạn nhập giá trị của b!");
    let a = parseInt(nhapa);
    let b = parseInt(nhapb);
    let tong = a + b;
    let hieu = a - b;
    let tich = a * b;
    let thuong;
    if(b != 0){
        thuong = a/b; 
        alert('Giá trị tổng hiệu tích thương của a và b là:' + tong + ', ' + hieu + ', ' + tich + ', ' + thuong);
    }
    else{
        alert("Giá trị của mẫu không thể bằng 0!!!");
    }
  
}
function B4Function(){
    let a = Math.floor(Math.random() *101);// math.floor làm tròn số 
    alert(a);
}
function CtoF(){
    const c = document.getElementById('Celsius').value;
    let C = parseInt(c);
    let result = ((C*9)/5)+32;
    alert(c + '\u00B0C is ' + result + '\u00B0F') ;
}
function FtoC(){
    const f = document.getElementById('Fahrenheit').value;
    let F = parseInt(f);
    let result = ((F-32)*5)/9;
    result = Math.floor(result);
    alert(f + '\u00B0F is ' + result + '\u00B0C') ;
}
function RandomF(){
    let f = Math.floor(Math.random() *101);
    let F = parseInt(f);
    let result = ((F-32)*5)/9;
    result = Math.floor(result);
    alert('It is ' + f + '\u00B0F today. That is ' + result + '\u00B0C') ;
}
function popup(){
    const container = document.getElementById('container');
    container.classList.add('show');
}
function close(){
    const container = document.getElementById('container');
    container.classList.remove('show');
}
function load(){
    const load_part = document.getElementById('load_part');
    load_part.classList.add('load');
}
function onkey(){
    const input = document.getElementById('input');
    const text = document.getElementById('text');
    text.innerHTML = input.value;
}
function B10(){
    let a = prompt("Mời bạn nhập giá trị của a!");
    let b = prompt("Mời bạn nhập giá trị của b!");
    let c = prompt("Mời bạn nhập giá trị của c!");
    let max;
    max = a;
    if(max<b){
        max = b;
    }
    if(max <c){
        max = c;
    }
    alert("Giá trị lớn nhất là: " + max);
}