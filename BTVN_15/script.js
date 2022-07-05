function B1(){
    const a = document.getElementById('check').value;
    let b = parseInt(a);
    if(a<0){
        alert("Đây là số âm");
    
    }
    else if(a==0){
        alert("đây là số 0")
    }
    else{
        alert("Đây là số dương");
    }
}
function B2(){
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;
    let a1 = parseInt(a); 
    let b1 = parseInt(b); 
    let c1 = parseInt(c); 
    let max;
    max = a1;
    if(max<b1){
        max = b1;
    }
    if(max <c1){
        max = c1;
    }
    alert("Giá trị lớn nhất là: " + max);
}
function B4(){
    const before = document.getElementById('text');
    let str = before.value;
    str.toLowerCase();
    str.replace(/  +/g," ");
    let arr = str.split(' ');
    let afterformat="";
    for(let i=0; i<arr.length; i++){
        afterformat += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) +" ";
    }
    afterformat = afterformat.replace(/  +/g,' ');
    before.value = afterformat;
  
}
function B6(){
    let a = prompt("Mời bạn nhập chuỗi a!");
    let b = prompt("Mời bạn nhập chuỗi b!");
    let position = a.search(b);
    let last = position + b.length -1;
    if(position == -1 ){
        alert("NO");
    }
    else{
        alert("YES" +
        "\nFirst position: " + position +
        "\nLast position: " + last);
    }
}
function B6plus(){
    let a = prompt("Mời bạn nhập chuỗi a!");
    let b = prompt("Mời bạn nhập chuỗi b!");
    let c = prompt("Mời bạn nhập chuỗi c!");
    let position = a.search(b);
    if(position != -1){
        a= a.replace(b,c);
        alert(a);
    }
    for(let i=0;i<a.length;i++){
        
    }
    
}
function B7(){
    let tele = document.getElementById('tele');
    let s = tele.value;
    let ns = s.substring(0, s.length - 4) + '****';
    tele.value= ns; 
    if(ns.charAt(0) == "0"){
        let str = ns.substring(1,s.length);
        let arr =  str.split("");
        let rv = arr.reverse();
        alert(rv.join(''));
    }
}