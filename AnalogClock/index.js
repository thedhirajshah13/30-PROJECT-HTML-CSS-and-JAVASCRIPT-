const hour = document.querySelector('.hour')
const minutes = document.querySelector('.minutes')
const second = document.querySelector('.second')
const digital = document.querySelector('.digital')
const html = document.querySelector('html')
const btn = document.querySelector('.mode')
const calender = document.querySelector('.calender')
let day = new Date().getHours() >= 12 ? 'PM' : 'AM'


setInterval(time, 1000)



function time() {

    const Hours = new Date().getHours() % 12
    const Minutes = new Date().getMinutes()
    const Seconds = new Date().getSeconds()
    const date = new Date().getDate()
    const weekdays = new Date()
    const option = {
        weekday: 'long',
        month: 'long',

    }
    const calenders = weekdays.toLocaleDateString(undefined, option)
    // console.log(Hours,Minutes,Seconds)


    second.style.transform = `rotate(${Seconds * 6}deg)`
    minutes.style.transform = `rotate(${Minutes * 6}deg)`
    hour.style.transform = ` translateY(30%) rotate(${(Hours * 30) + (Minutes / 2)}deg)`


    // console.log((Hours*30)+(Minutes/2))



    // Dynamically inserting time on digital class..
    digital.innerHTML = `0${Hours}:${Minutes} ${day}`




    // Dunamically inserting date..
    document.querySelector('.date').innerHTML = date
    calender.innerHTML = calenders






    // Dark and Light Mode...
    btn.addEventListener('click', ((e) => {
        html.classList.toggle('dark')
        if (html.classList.contains('dark')) {

            e.target.innerHTML = ' Light Mode'
        }
        else {

            e.target.innerHTML = 'Dark Mode'
        }

    }))












    // This is also we can do that..
    //     sec++
    //     second.style.transform=`rotate(${sec*6}deg)`
    //     minutes.style.transform=`rotate(${min*6}deg)`
    //     console.log(sec ,min)

    //     if(sec>59){
    // sec=0

    //     }
    //     else if(sec>=59){
    // min++

    //     }
}