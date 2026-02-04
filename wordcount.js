function wordcount(sentence){
    console.log(sentence);
    let nullobj={};
    const singleword=sentence.split(" "); // space conver releted divide kore
    console.log(singleword);
    for(everyword of singleword){ //string a conver korlam
        console.log(everyword);
        if( nullobj .hasOwnProperty(everyword)){
           nullobj [everyword] ++;
        }
        else {
        nullobj [everyword]=1;
        }
    }

 return nullobj;

}
const result=wordcount("I love js and I love coding and js is fun");
console.log(result);