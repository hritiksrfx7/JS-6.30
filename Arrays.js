

// function Raj() {
//     let fruit = ["Apple", "Mango", "Banana"]
//     console.log(fruit[1]);
    

//     // pop(),  push(),  shift(),  unshift()

//     //fruit.pop()   remove from last
    
//     //fruit.push("Grapes", "papaya")   add from last

//     //fruit.shift()   remove from starting

//     // fruit.unshift()  add from starting

//     //===============slice(), splice() ====================

//     console.log(fruit.slice(1,3));
    
// }

// function Raj2() {
//  let str = "cybrom"
//  let str2 = ""
//  //console.log(str.split('').reverse().join('') );
//  for(let i=str.length; i>=0; i--){
//         str2 += str.charAt(i);
//  }
//  console.log(str2);
 
// }


//Q1
function sum(){
    let arr = [2,4,6,8,10]
    let res = 0;
    for(let i=0; i<arr.length; i++){
        res += arr[i]
    }
console.log(res);

}


//Q2

function max(){
    let arr = [3,7,2,9,5]
    let res = 0;
    for(let i=0; i<arr.length; i++){
         if(res < arr[i]){
            res = arr[i]
         }
    }
    console.log(res);
    
}



//Q3 Even or odd

function evenOdd(){
    let arr = [1,2,3,4,5,6,7,8]
    let even =0
    let odd =0

    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 ==0){
            even++;
        }else{
            odd++;
        }
    }
    console.log(`Even = ${even}`);
    console.log(`odd = ${odd}`);
    
    
}


//Q4 Array reverse


function reverse(){
    let arr =[10,20,30,40,50]
    let resArr = []
    for(let i=arr.length-1; i>=0; i--){
        resArr.push(arr[i])
    }
    console.log(resArr);
    
}


//Q5 check if an ele is exist
function checkEle(){
    let arr = [3,5,7,9,11]
    for(let i=0; i<arr.length; i++){
        if(arr[i] == 9){
            console.log("Yes");
            break;
        }
    }
    
}


//Q6 Merge two array


function merge(){
    let arr1 = [1,2,3]
    let arr2 = [4,5,6]
    let res = []
    for(let i=0; i<arr1.length; i++){
        res.push(arr1[i])
    }
    for(let i=0; i<arr2.length; i++){
        res.push(arr2[i])
    }
    console.log(res)
    
}


 let count =0;
 let show = document.querySelector('#number')


 let  increment = ()=>{
   
    show.innerHTML = ++count
 }
 let  Decrement = ()=>{
    
    if(count == 0){
        return;
    }else{
        show.innerHTML = --count
    }
}


const reset = ()=>{
    show.innerHTML = 0;
}



