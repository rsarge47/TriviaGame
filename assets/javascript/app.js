$(document).ready(function () {
    /* I would like to arrange the data into objects and condense
        the repetitive if-else code into functions */
    var right = 0;
    var wrong = 0;
    var untouch = 0;
    var timeRemain = 25;
    var timer;
    run();

    function run() {
        clearInterval(timer);
        timer = setInterval(decrement, 1000);
    }
    function stop() {
        clearInterval(timer);
        results();
    }
    function decrement() {
        timeRemain--;
        $('.timer').text('Time Remaining: ' + timeRemain);
        if (timeRemain === 0) {
            stop();
            alert("Time Up!");
        }
    }
    function results() {
        var select = $('input[name="first"]');
        var picked = false;
        // Attempted :checked
        // why does this return a value of "on"? ---->   var test = $('input[name="first"]:checked').val(); 
        // console.log("test: " + test);

        for (i = 0; i < select.length; i++) {
            if (select[i].checked) {  
                // I want to understand why .attr does not work here        
                var choice = $('input[name="first"]')[i].getAttribute("id");
                if (choice === "42") {
                    right++;
                    picked = true;
                }else if ((choice === "23") || (choice === "47") || (choice === "13")) {
                    wrong++;
                    picked = true;
                }
            }
        }
        if (picked === false) {
            untouch++;
        }else {
            picked = false;
        }    
        select = $('input[name="second"]');
        for (i = 0; i < select.length; i++) {
            if (select[i].checked) {
                var choice = $('input[name="second"]')[i].getAttribute("id");
                if (choice === "burj") {
                    right++;
                    picked = true;
                }else if ((choice === "shanghai") || (choice === "willis") || (choice === "empire")) {
                    wrong++;
                    picked = true;
                }
            }
        }
        if (picked === false) {
            untouch++;
        }else {
            picked = false;
        }        
        select = $('input[name="third"]');
        for (i = 0; i < select.length; i++) {
            if (select[i].checked) {
                var choice = $('input[name="third"]')[i].getAttribute("id");
                if (choice === "amazon") {
                    right++;
                    picked = true;
                }else if ((choice === "mississippi") || (choice === "nile") || (choice === "yangtze")) {
                    wrong++;
                    picked = true;
                }
            }
        }
        if (picked === false) {
            untouch++;
        }else {
            picked = false;
        }        
        select = $('input[name="fourth"]');
        for (i = 0; i < select.length; i++) {
            if (select[i].checked) {
                var choice = $('input[name="fourth"]')[i].getAttribute("id");
                if (choice === "usa") {
                    right++;
                    picked = true;
                }else if ((choice === "china") || (choice === "ussr") || (choice === "gb")) {
                    wrong++;
                    picked = true;
                }
            }
        }
        if (picked === false) {
            untouch++;
        }else {
            picked = false;
        }        
        select = $('input[name="fifth"]');
        for (i = 0; i < select.length; i++) {
            if (select[i].checked) {
                var choice = $('input[name="fifth"]')[i].getAttribute("id");
                if (choice === "india") {
                    right++;
                    picked = true;
                }else if ((choice === "usa2") || (choice === "china2") || (choice === "brazil")) {
                    wrong++;
                    picked = true;
                }
            }
        }
        if (picked === false) {
            untouch++;
        }else {
            picked = false;
        }        
        select = $('input[name="sixth"]');
        for (i = 0; i < select.length; i++) {
            if (select[i].checked) {
                var choice = $('input[name="sixth"]')[i].getAttribute("id");
                if (choice === "christian") {
                    right++;
                    picked = true;
                }else if ((choice === "islam") || (choice === "judaism") || (choice === "hinduism")) {
                    wrong++;
                    picked = true;
                }
            }
        }
        if (picked === false) {
            untouch++;
        }else {
            picked = false;
        }  
        
        $('.results').html("<p>Correct Answers: " + right + "</p>");
        $('.results').append("<p>Wrong Answers: " + wrong + "</p>");
        $('.results').append("<p>Unanswered : " + untouch + "</p>");
        $('.quiz').empty();
    }
});