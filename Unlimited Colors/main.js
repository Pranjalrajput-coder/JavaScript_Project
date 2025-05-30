//generate a random number

const random_color = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'

    for(let i = 0; i < 6 ;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

let intervalId;

const startChangingColor = function(){
    document.body.style.backgroundColor = random_color();
}

    // Start an interval to log the counter value every second when the "Change" button is clicked
    document.querySelector('#start').
    addEventListener('click',function(){
        intervalId = setInterval(startChangingColor,1000);
        console.log(intervalId)
    })

    document.querySelector('#stop').
    addEventListener('click',function(){
        clearInterval(intervalId);
        document.body.style.backgroundColor = '#212121';
        console.log(intervalId)
        
    })

