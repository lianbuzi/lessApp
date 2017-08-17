import  './css/index.less';
let  v='aaabbb';
let reload2=()=>{
    console.log('success')
};
reload2();
const es6={
    str(){
        let s=document.querySelector('#ps');
        s.innerHTML=s.innerText.padStart(13,'hello');
        let d=document.querySelector('#pd');
        d.innerHTML=d.innerText.padStart(13,'hello');
        let a=document.querySelector('article');
        a.innerHTML=`
       aaa
       bbb${v}
       ccc
        `
    },
    arr(){
        var nodeList = document.querySelectorAll('p');
        var array = [...nodeList];
        console.log(...array)
    }
};
es6.str();
es6.arr();

console.log(...[1,2,3])
console.log(v);