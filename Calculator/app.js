let input=document.getElementById('text');
let btn1=document.querySelectorAll('.btn1');
let btn2=document.querySelectorAll('.btn2');
let btn3=document.querySelectorAll('.btn3');
let btn4=document.querySelectorAll('.btn4');
let btn5=document.querySelectorAll('.btn5');
let result="";
let arr1=Array.from(btn1);
let arr2=Array.from(btn2);
let arr3=Array.from(btn3);
let arr4=Array.from(btn4);
let arr5=Array.from(btn5);

arr1.forEach(btn1 =>{
    btn1.addEventListener('click',(e) => {
        if(e.target.innerHTML == 'AC'){
            result="";
            input.value=result;
        }
        else if(e.target.innerHTML=='DEL'){
            result=result.substring(0,result.length-1);
            input.value=result;
        }
        else{
            result+=e.target.innerHTML;
            input.value=result;
        }
          
       

    })
})
arr2.forEach(btn2 =>{
    btn2.addEventListener('click',(e) => {
       
       
        result+=e.target.innerHTML;
        input.value=result;

    })
})
arr3.forEach(btn3 =>{
    btn3.addEventListener('click',(e) => {
       
        result+=e.target.innerHTML;
        input.value=result;

    })
})
arr4.forEach(btn4 =>{
    btn4.addEventListener('click',(e) => {
       
        result+=e.target.innerHTML;
        input.value=result;

    })
})
arr5.forEach(btn5 =>{
    btn5.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
            result=eval(result);
            input.value=result;
        }else{
            result+=e.target.innerHTML;
            input.value=result;
        }
       

    })
})