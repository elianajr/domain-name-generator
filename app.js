

const PRONOUN= ['the','our'];
const ADJETIVE = ['great', 'big' ];
const NOUN = ['jogger','racoon', 'wacom','suspicious', 'sitcom', 'italia'];
const EXTENSION =['.com', '.net', '.us', '.it']

window.onload = () =>{
    let result = generator();
    console.log(result);
    
}


function generator() {
    let domain = [];
    for (let i in PRONOUN) {
      for (let j in ADJETIVE) {
        for (let k in NOUN) {
          for (const l in EXTENSION) {
              let newExt = NOUN[k].slice(-EXTENSION[l].length);
                  if ( newExt == EXTENSION[l]) {
                    domain.push(PRONOUN[i].concat(ADJETIVE[j],(NOUN[k].slice(0,-EXTENSION[l].length)),EXTENSION[l]));
                  }else {
                    domain.push(PRONOUN[i].concat(ADJETIVE[j],NOUN[k],EXTENSION[l])); 
                  }
          }
        }
      }
    }
  return domain;  
}


// Primera versión sin el hack

// const PRONOUN = ['the','our'];
// const ADJ = ['great', 'big'];
// const NOUN = ['jogger','racoon'];
// const EXT = ['.com', '.net', '.us', '.io'];

// window.onload = function () {
//     document.querySelector("#domainName").innerHTML = myName();
// }


// const myName = () => {
//   const result = [];
//   for(let i = 0; i < PRONOUN.length; i++){
//      for(let j = 0; j < ADJ.length; j++){
//        for(let k = 0; k < NOUN.length; k++){
//          for(let h = 0; h < EXT.length; h++){
//             result.push(PRONOUN[i] + ADJ[j] + NOUN[k] + EXT[h]);
//         }
//        }
//      }
//   }
//   return result;
// }

// console.log(myName());



