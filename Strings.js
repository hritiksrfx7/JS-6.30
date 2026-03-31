

function Deeksha(){
    let myname = "Hritik is bhopal from Bhopal only"
    console.log(myname.replace(/Bhopal/gi, "Indore"));
    
 
}
let str = "Apple Mango Banana"
let arr = str.split(' ')
console.log(arr);

//Template Literals (` `)

function Shiv() {
    //1st use    Supports Single('') and double("") quotes
    //   alert(`Hello i am "Sid" from 'Bhopal' mp.nagar`)


    //2nd use Multi line String
    // let str = `Hello I am 
    //  Hritik`
    // console.log(str);


    // 3rd use Supports HTML Tags
   // document.write(`Hello I am <b> Hritik </b> From Bhopal`);
    
  // 4th use Support dynamic Varibale
//   let myname = "Hritik"
//   let myage  = 23
//   console.log(` hello my name is ${myname} and ${myage} is `);
  
    
}

function userPromt(){

    const myname = prompt(`what is your name`)
    const myage = prompt(`What is your age`)
    document.write(` My name is <b> ${myname} </b> and my age is <b> ${myage} </b> `)
}