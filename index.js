/****************** 1. gadiyo number  ********************/ 
function btn1Click() {

    lbl1.innerHTML = " ";

    var i = 1;
    while (i <= parseInt(txt1.value)) {

        lbl1.innerHTML += txt1.value + "X" + i + "=" + txt1.value*i + "<br>";
        i++;

           }
}

/****************** 2. multi-gadiyo number  ********************/ 

function btn2Click() {

    lbl2.innerHTML = " ";

    var i = 1;
    while (i <= 10) {

        var j = txt2.value;

        while(j<=txt3.value){
            lbl2.innerHTML += j + "*" + i + "=" + j*i + "\t\t" ;
            j++;
        }
        lbl2.innerHTML += "<br>";
        i++;

           }
}

/****************** 3. perfect number  ********************/ 

function btn3Click() {
    lbl3.innerHTML = ""; // Clear previous outputs
    lbl4.innerHTML = "";

    let inputValue = parseInt(txt4.value); // Convert input to a number
    if (isNaN(inputValue) || inputValue <= 0) {
        lbl4.innerHTML = "Please enter a valid positive number.";
        return;
    }

    let i = 1;
    let sum = 0;

    while (i < inputValue) {
        if (inputValue % i === 0) { // Check if i is a divisor
            sum += i;
            lbl3.innerHTML += i + " "; // Append divisors with a space
        }
        i++;
    }

    // Check if the number is a perfect number
    if (sum === inputValue) {
        lbl4.innerHTML = inputValue + " is a perfect number.";
    } else {
        lbl4.innerHTML = inputValue + " is not a perfect number.";
    }
}

/****************** 4. or number  ********************/ 

function btn4Click() {

    lbl5.innerHTML = " ";

    var i = 0;
    while (i <= txt5.value) {

      if (i % 3 == 0) 
        {
        lbl5.innerHTML += i; 
        }

      else if(i % 7 == 0)
        {
        lbl5.innerHTML += i;
        }
        i++;
           }
}

/****************** 5. nevine number  ********************/ 
function btn5Click() {

    lbl6.innerHTML = " ";

    var rem,sum=0;
    var temp=txt6.value;

    while (temp != 0) {

        rem = temp % 10;
        sum = sum + rem;
        temp = temp / 10;
 
           }
           if (txt6.value%sum== 0)
            {
               lbl6.innerHTML += txt6.value + "is netive number";
            }

            else 
            {
                lbl6.innerHTML += txt6.value + "is not netive number";
            }
}
/****************** 6. revers  number  ********************/ 

function btn6Click() {

    lbl7.innerHTML = " ";
    var i = txt7.value;

    while (i >= 1) {

        lbl7.innerHTML += i;
        i--;
        
    }

    

     
}


