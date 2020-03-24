//1.call function
    // function helloWorld() {
    //     console.log("This life is short");
    //     console.log("So,don't get attached to it without the commandment of Allah(SWT)")
    // }
    // helloWorld();

//2.Function Parameter
    // function doubleIt(num) {
    //     var result = num*2;
    //     console.log(result);
    // }
    // doubleIt(10);
    // doubleIt(500);

// 3.Function Parameter:keeping the value in a variable and work with it
//Here,'doubleIt()' calls and we give the value back to it.'return' is the keyword who send back the value to the function.
    // function doubleIt(num) {
    //     var result = num*2;
    //     return result;
    // }
    // var val1=doubleIt(10);
    // var val2=doubleIt(500);
    // console.log(val1,val2);
    // var sum=val1+val2;
    // console.log(sum);

//4.multiple parameter
    function add(num1,num2) {
        var result=num1+num2;
        return result;
    }
    var sum=add(5,10);
    console.log(sum);

