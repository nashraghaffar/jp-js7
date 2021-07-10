
// CHAPTER 38-42


// TASK 01


// var a = 9;
// var b = 2;
// var h = power(a, b)
// console.log(h)
// function power(x, y) {
//     var z = x;
//     for (i = 1; i < y; i++) {
//         x = x * z;
//     }
//     return x;
// }




// TASK 02




// var year = +prompt("Enter the year");
// if(year % 4 === 0){
//     alert("This is the leap year")
// }else{
//     alert("This is not a leap year");
// }


// TASK 03



// var a = +prompt("Enter the length of the first side of triangle");
// var b = +prompt("Enter the length of the second side of triangle");
// var c = +prompt("Enter the length of the third side of triangle");
// alert("The area of this triangle is : " + result);
// var result = area(a, b, c);


// function area(x, y, z) {

//     var s = cal(x, y, z)
//     var ans = s(s - x)(s - y)(s - z);
//     return ans;
// }

// function cal(p, q, r) {
//     var t = (p + q + r) / 2;
//     return t;
// }



// TASK 04


// mainFunction();

// function mainFunction() {
//     var a = +prompt("Enter the marks of first subject:");
//     var b = +prompt("Enter the marks of second subject:");
//     var c = +prompt("Enter the marks of third subject:");
//     var d = average(a, b, c);
//     var e = percentage(a, b, c);
//     alert("The average marks are"+ d);
//     alert("The percentage is "+ e);

// }


// function average(p, q, r) {
//     var ans = (p + q + r) / 3
//     return ans;
// }

// function percentage(x, y, z) {
//     var result = ((x + y + z) / 300) * 100
//     return result;
// }





// //question 5
// const findindexof = (str,letter) =>{
//     count=0
//     for(i=1;i<=str.length;i++){
//        if(letter===str.slice(i-1,i)){
//            return i
//        }
//     }
//     return `letter not in the string`
// }

// str="abcdef"
// console.log(findindexof(str,"a"))


// //question 6
// str ="vowels"
// //console.log(str.replace("c",""))
// const replacevowel = (str) =>{
//     if(str.length>25){
//         console.log(`Sorry string length length is greater then 25`)
//     }
//     for (i of str){
//         if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
//             str=str.replace(i,"")
//         }
//     }
//     console.log(str)
// }
// replacevowel(str)

// //question 7
// const occurence = (str) =>{
//     document.write(str+"<br>")
//     document.write("Such occurrence are ")
//     for(i=0;i<str.length-1;i++){
//         x=str.slice(i,i+2)
//         if(x==="aa" || x==="ae" || x==="ai" || x==="ao" || x==="au" || x==="ea" || x==="ee" || x==="ei" || x==="eo" || x==="eu" || x==="ia" || x==="ie" || x==="ii" || x==="io" || x==="iu" || x==="oa" || x==="oe" || x==="oi" || x==="oo" || x==="ou" || x==="ua" || x==="ue" || x==="ui" || x==="uo" || x==="uu"){
//             document.write(x+" ,")
//         }
//     }
// }
// occurence("Pleases read this application and give me gratuity")

// //question 8
// km = prompt("Please enter the distance in km")
//  const m = (km) => km*1000
//  const feet = (km) => km*3280.84
//  const inch = (km) => km*39370.1
//  const cm = (km) => km*100000
//  document.write(m(km)+"<br>")
//  document.write(feet(km)+"<br>")
//  document.write(inch(km)+"<br>")
//  document.write(cm(km)+"<br>")

// //question 09

// var workingHours = +prompt("Enter workin hours")
// var  overtime = workingHours - 40;
// var amount = overtime * 12.00;
// alert("The overtime amount is "+ amount)



// //question 10
// amount=prompt("Enter amount to withdraw")
// const cashier = (amount) =>{
//     a=amount%100
//     hndr=amount-a
//     hndr=hndr/100
//     ten=a%50
//     fifty=a-ten
//     fifty=fifty/50
//     ten=ten/10
//     document.write(`you will have ${hndr} hundred notes ${fifty} fifty notes ${ten} Ten notes`)
// }
// cashier(amount)






// CHAP 43-48

// task1
// in html file

// task2
// in html file


// task 3
//in html file
// function SomeDeleteRowFunction() {
// var td = event.target.parentNode;
// var tr = td.parentNode; 
// tr.parentNode.removeChild(tr);
// }

// task4 
// in html file


// task5
// in html file
// var counter = 0;
// function increase(){
        // counter++;
    // alert(counter)
// }

// function decrease(){
//         counter--;
//     alert(counter)
// }