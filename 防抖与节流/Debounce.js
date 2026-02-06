function debounce(fn,delay){
    let timer=null;

    return function(...args){
        //如果定时器存在，则清除，重新计时
        if(timer) clearTimeout(timer);

        //正常的防抖逻辑
        timer=setTimeout(()=>{
            fn.apply(this,args);
        },delay);
    };
}

//测试用例
let count=0;
function handleInput(){
    count++;
    console.log('执行次数：',count);
}
const debouncedInput=debounce(handleInput,1000);

//模拟快速调用5次
debouncedInput();  
debouncedInput();  
debouncedInput();  
debouncedInput();  
debouncedInput();  

//1秒后只会执行一次
setTimeout(()=>{
    console.log('最终执行次数应该是1');
},1100);
