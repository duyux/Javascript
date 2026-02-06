//方案 A：时间戳版
//特点：第一次触发立即执行
function throttleTimestamp(fn,delay){
    let previous=0;
    return function(...args){
        const now=Date.now();
        if(now-previous>delay){
            fn.apply(this,args);
            previous=now;
        }
    };
}

//测试用例
let count=0;
function handleClick(){
    count++;
    console.log('执行次数：',count,'时间：',Date.now());
}

const throttledClick=throttleTimestamp(handleClick,1000);

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
})
