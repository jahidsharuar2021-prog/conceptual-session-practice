function wordcount(sentence){
    console.log(sentence);
    let nullobj={};
    const singleword=sentence.split(" "); // space conver releted divide kore
    
    for(everyword of singleword){ //string a conver korlam
        let word=everyword.toLowerCase();
        if( nullobj .hasOwnProperty(word)){
           nullobj [word] ++;
        }
        else {
        nullobj [word]=1;
        }
    }

 return nullobj;

}
const result=wordcount("I love js and i love coding and js is fun Fun");
console.log(result);