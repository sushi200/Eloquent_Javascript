var i;
for (i=0;i<=100;i++)
{
    if (i%3==0 && i%5==0){
        console.log("FuzzBuzz");
    }
    else if (i%3==0){
        console.log("Fuzz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else {
        console.log(i)
    }
}console.log(i)
