random_no = 0;

random_no = Math.floor((Math.random()*array_1.length)+1) 

console.log(array_1.length[random_no])

function setup() {
    canvas = createCanvas(280, 280)
    canvas.center();
    background("white");
}

function clearCanvas() {
    background("white");
}

function draw() {
    check_sketch()
    if(drawn_sketch == sketch)
    {
        answer_holder = "set"
        score++;
        document.getElementById('score').innerHTML = 'Score:' + score;
    }
}

function check_sketch()
{
    timer_counter++;
    document.getElementById("time").innerHTML = 'Timer' + timer_counter;
    console.log(timer_counter)
    if(timer_counter > 400)
    {
        timer_counter = 0;
        timer_check = "completed"
    }
    if(timer_check=="completed" || answer_holder == "set")
    {
        timer_check = "";
        answer_holder = "";
        updateCanvas();
    }
}

function updateCanvas() {
    background("white");
    random_number = Math.floor((Math.random) (quick_draw_data_set.length
    ) + 1);

    console.log(quick_draw_data_set[random_number]);
    sketch = quick_draw_data_set[random_number];
    document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn:'
}


