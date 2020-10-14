/*24. 
use of classbase model with constuctor passing parameter,
Given two array A and B of size 10.  Merge the two arrays into a third array.  
Then split Third array into four parts. without using slice, splice and merge method.
Each part stored in a different array.*/


  class arrayOperations {

    constructor( arrayOne, arrayTwo){

      this.arrayFirst = arrayOne;
      this.arraySecond = arrayTwo;
      this.mergeArray= [];
      this.arrayPartOne = [];
      this.arrayPartTwo = [];
      this.arrayPartThree = [];
      this.arrayPartFour = [];
      this.counter = 0;
      this.elm;
    }

    arrayMerge()
    {
      if((this.arrayFirst))
      {
        for(var i=0; i<this.arrayFirst.length;i++)
        {
            this.elm = this.arrayFirst[i];
          this.mergeArray.push(this.elm);
        }
      }
      if ((this.arraySecond))
      {
        for(var i=0; i<this.arraySecond.length;i++)
        {
            this.elm = this.arraySecond[i];
          this.mergeArray.push(this.elm);
        }
      }
      console.log(this.mergeArray);
    }

    arraySplit()
    {
      var len = this.mergeArray.length / 4;
      for(var i = 0; i<len; i++ )
      {
        this.arrayPartOne.push(this.mergeArray[i]); 
      }
      for(var j =0; j<len; j++ )
      {
        this.arrayPartTwo.push(this.mergeArray[i]);
        i++
      }
      for(var k = 0; k<len; k++ )
      {
        this.arrayPartThree.push(this.mergeArray[i]);
        i++
      }
      //console.log(i);
      for(var l = 0; l<len; l++ )
      {
        this.arrayPartFour.push(this.mergeArray[i]);
        i++
      }
      console.log(this.arrayPartOne,this.arrayPartTwo,this.arrayPartThree,this.arrayPartFour);

    }
    
  };
  
  var Operation = new arrayOperations([1,2,3,4,5,6,8,7,9,10],[11,12,13,14,15,16,17,18,19,20]);
  Operation.arrayMerge();
  Operation.arraySplit();




