// Please make sure all your code is added inside the `runAfterTests` function.
function runAfterTests() {
  /**
   * Follow the comments below.
   * Feel free to use `console.log` to see what values are being returned.
   */

  // Create a variable called `myNumber`, and assign it to any number
var myNumber = 3243;
  /**
   * Create another variable called `stringValue`.
   * Assign it the value that's returned when you pass
   * `myNumber into the function `numberToString`.
   */
   
      var stringValue = numberToString(myNumber);
      
      console.log(stringValue);

  /**
   * If you pass `myNumber` and `stringValue` into `areEqual`,
   * what value will you get back? Why is that?
   */
   function areEqual(){

      return stringValue==myNumber;
   }

  /**
   * You may have noticed that the `calculate` function combined
   * the functionality of `add`, `subtract`, `multiply`, and `divide`.
   * Did you try to use those functions _inside_ of `calculate`?
   * If you didn't go back and try it, this is called "reusability"!
   */
calculate("multiply",8,5);
console.log(isGreaterThan(75,45));
console.log(areEqual(54,"54"));
  // Do you see any other functions where code could be reused?

  /**
   * For your `letterGrade` function,
   * what happens if you provide a `score` that is less than 0,
   * or greater than the `total` value?
   * Does it still work as expected? If it doesn't, how could you improve this?
   */


function letterGrade(score,total){
    
   var result = score/total *100;
  
  if(result<0 || result>100)return "wrong input number";
  if (result>=90 && result <=100)return "A";
  else if(result>=80 && result<90)return "B";
  else if(result>=70 && result<80)return "C";
  else if(result>=60 && result<70)return "D";
  else return "F";
}
  /*
   * Your `combine` function looks okay,
   * but what if you wanted to join it with ANY string instead of a single space?
   * Create a new function called `improvedCombine`,
   * with the same parameters as `combine`, but also add a
   * third parameter called `glue` (a string value).
   */
function improvedCombine(word1,word2,glue){

    return word1+glue+word2;

}
    console.log(improvedCombine("the","sauce"," best "));
  // What happens if you were to uncomment the following lines?

   combine = improvedCombine;
   console.log(combine('combine', 'improved!', ' is '));
}
