//方案 B：定时器版
//特点：第一次触发不会立即执行（需等待延迟）
function throttleTimer(fn,delay){
    let timer=null;
    return function(...args){
        if(!timer){
            timer=setTimeout(()=>{
                timer=null;
                fn.apply(this,args);
            },delay);
        }
    };
}

//测试用例
let count=0;
function handleClick(){
    count++;
    console.log('执行次数:',count,'时间：',Date.now());
}

const throttledClick=throttleTimer(handleClick,1000);

//快速调用5次
throttledClick();  
throttledClick();  
throttledClick();  
throttledClick();  
throttledClick();  

console.log('立即执行次数应该是1');

//1.1秒后再调用，应该执行第二次
setTimeout(()=>{
    throttledClick();
    console.log('1.1秒后执行次数应该是2');
},1100);