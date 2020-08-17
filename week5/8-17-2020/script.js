


let main= document.createElement('div');
main.id='dis'
document.body.append(main);


//-----------------------------------------------------------------------------//


function countdownto(target, time,callback) {
    var finish = new Date(time);
    var s = 1000,
        m = s * 60,
        h = m * 60,
        d = h * 24;

    (function timer() {
        var now = new Date();
        var dist = finish - now;

        var days = Math.floor(dist / d),
            hours = Math.floor((dist % d) / h),
            minutes = Math.floor((dist % h) / m),
            seconds = Math.floor((dist % m) / s);

        var timestring = days + 'days ' + hours + 'hrs ' + minutes + 'mins ' + seconds + 'seconds ';
        target.innerHTML = timestring
        
        if (dist > 0) {
            setTimeout(timer, 10);
        } else {
            callback()
        }
        
    })()

}

// countdown element
var countdownel = document.getElementById('dis')

// 10 seconds into the future
var time = new Date()
time.setSeconds(time.getSeconds() + 10)

// countdown function call
countdownto(countdownel, time, function(){
    countdownel.innerHTML='';
    countdownel.style.background='none';
   countdownel.innerHTML='<img src="images/img.png">';
   console.log('tadaaa')
})