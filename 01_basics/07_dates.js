const d = new Date();
// console.log(d.toString());
// console.log(d.toDateString());
// console.log(d.toLocaleString());
// console.log(typeof d);


// let myDate = new Date(2025, 5, 27)
let mytimeDate = new Date(2025, 5, 27,4,18)

// console.log(mytimeDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(mytimeDate.getTime());
// console.log(Math.floor(Date.now()/1000));

newDate.toLocaleString('default',{
    weekday: "long"
})