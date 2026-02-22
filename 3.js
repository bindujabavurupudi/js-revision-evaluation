function mySetInterval(callback, delay){
    let timerId;
    let isCleared = false;
    function repeat(){
        timerId = setTimeout(()=>{
            if(!isCleared){
                callback();
                repeat();
            }
        }, delay);
    }

    repeat();
    return {
        id: timerId,
        clear: function(){
            isCleared = true;
            clearTimeout(timerId);
        }
    };
}
function myClearInterval(id){
    id.clear();
}



let interval = mySetInterval(() =>{
    console.log("Running...");
}, 2000);
setTimeout(() =>{
    myClearInterval(interval);
    console.log("Stopped..");
}, 7000)