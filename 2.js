function createRateLimiter(limit, interval){
    let calls = 0;
    setInterval(()=>{
        calls = 0;
    }, interval);
    return function(){
        if(calls < limit){
            calls++;
            return "Request allowed";
        }
        else{
            return "Rate limit exceed...Try again later";
        }
    };
}

let req = createRateLimiter(5, 10);
console.log(req());
console.log(req());
console.log(req());
console.log(req());
console.log(req());
console.log(req());
console.log(req());