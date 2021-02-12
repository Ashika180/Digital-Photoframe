function preload(){}

function setup(){
    canvas = createCanvas(800, 600);
    canvas.position(400, 125);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 165, 100, 450, 350);
    //x-left, y, width, y2, height//

    fill(76, 20, 19); // middle - color//
    stroke(0, 128, 0);
    rect(150, 50, 500, 10); //(top)//

    fill(76, 20, 19);
    stroke(0, 128, 0);
    rect(125, 500, 550, 10); //(bottom)//
//x, y, height width//

    fill(76, 20, 19);
    stroke(0, 128, 0);
    rect(125, 40, 10, 500); //(vertical-right)//

    fill(76, 20, 19);
    stroke(0, 128, 0);
    rect(650, 40, 10, 500); //(vertical-right)//

    fill(255,69,0);
    stroke(0, 128, 0);
    circle(125, 55, 80); //x, y, height, width, (top_left)//

    fill(255,69,0);
    stroke(0, 128, 0);
    circle(650, 50, 80); //x, y, height, width, (top_right)//

    fill(255,69,0);
    stroke(0, 128, 0);
    circle(650, 500, 80); //(x, y, height, width, (bottom_right))//

    fill(255,69,0);
    stroke(0, 128, 0);
    circle(125, 500, 80); //(x, y, height, width, (bottom_left))//
}

function take_snap(){
    save("photo.png");
}