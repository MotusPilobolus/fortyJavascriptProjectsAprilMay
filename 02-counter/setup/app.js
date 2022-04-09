let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

/* btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if ( styles.contains("decrease")) { 
            count--; 
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red"
        }
        if(count === 0) {
            value.style.color= "black";
        }
        value.textContent = count;
    })
    
}) */

// thought it'd be fun to play with subbing in switch here for a challenge!

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        switch (styles[1]) {
            case 'decrease':
                count--;
            break;
            case 'increase':
                count++;
            break;
            case 'reset':
                count = 0;
            break;
            }  
            if (count > 0) {
                value.style.color = "green";
            }
            if (count < 0) {
                value.style.color = "red"
            }
            if(count === 0) {
                value.style.color= "black";
            }
                    
        value.textContent = count;
        })
    
})