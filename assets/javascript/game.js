//declaring all variable that is to be used
var number;
var win=0;
var total=0;
var loss=0;
var arr=[];
//to load the javascript after loading the document
$(document).ready(function() {
    //to reset the  number that is to be guessed
      function reset() {
number=Math.floor((Math.random() * 101) + 19);
$("#number-to-guess").html(number);
//nested for loop is here to do not repeat the gem number
          for(var i=0;i<4;i++)
          {
              arr[i]=Math.floor((Math.random() * 11) + 1);
              var repeat=true;
              while(repeat)
              {
                  repeat=false;
                  for(var j=0;j<i;j++)
                  {
                      if(arr[i]===arr[j])
                      {
                          repeat=true;
                          arr[i]=Math.floor((Math.random() * 11) + 1);
                      }
                  }
              }
              //pushing 4 random numbers into the array
              arr.push(arr[i]);
          }
      total=0;
          $("#total").html(total);
          //pushing array value to each gem
          $("#gem1").val(arr[0]);
      $("#gem2").val(arr[1]);
      $("#gem3").val(arr[2]);
      $("#gem4").val(arr[3]); 
      }
      //calling function for getting the value of number to be guessed and value of gems for first time
      reset();
     
      $("button").click(function()
  {
    //adding total 
    total = parseInt(total) + parseInt($(this).val());
      $("#total").html(total);
      //checking if total is equal to number to be guessed 
      if(total==number)
      {
          win++;
          $("#win").html(win);
          //if win then calling reset function to get another number to be guessed and reseting the gems value
          reset();
      }
      //checking if total is greater than number to be guessed
      else if(total>number)
      {
          //if loss then calling reset function to get another number to be guessed and reseting the gems value
          loss++;
          $("#loss").html(loss);
          reset();
      }

  });
});