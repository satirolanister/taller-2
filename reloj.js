const viewHours=() =>{
    const time = new Date();
    const hours = time.getHours();
    const minute = time.getMinutes();
    const seconds = time.getSeconds();
    let hourNow ="";
    
    hourNow=(hours>10?+hours:hours);
    hourNow+=":"+(minute<10?"0"+minute:minute);
    hourNow+=":"+(seconds<10?"0"+seconds:seconds);
    
    document.getElementById("reloj").innerHTML= hourNow;
    var op = setInterval(() => {
        viewHours(),1000
    });
};


