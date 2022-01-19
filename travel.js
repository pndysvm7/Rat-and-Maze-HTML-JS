// while moving forward we are giving the ans color but when we are returning back from the path not possible we rae giving it green color
//document.getElementById("intro1").innerHTML = "Allowed";
//document.getElementById("intro2").innerHTML = "Allowed";


direction = [];
var arr = [ [],[],[],[],[],[],[],[],[] ];
res = document.getElementById("result");

function getInput(){
    res.innerHTML = "Answer Displays Here";


    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            arr[i][j] = Math.floor(Math.random() * 2);

        }
    }
    var it;
    arr[8][8] = 1;
    arr[4][4] = 1;
    arr[5][6] = 1;
    arr[7][8] = 1;
    arr[2][3] = 1;
    arr[4][7] = 1;
    arr[0][0] = 1;
    arr[5][8] = 1;
    arr[8][7] = 1;
    arr[1][0] = 1;
    arr[6][5] = 1;
    arr[4][8] = 1;
    arr[5][2] = 1;
    arr[6][6] = 1;
    arr[7][7] = 1;
    arr[6][2] = 1;
    arr[1][5] = 1;


    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            it = document.getElementById(i * 9 + j );

                it.style.backgroundImage = "none";

            if(arr[i][j] == 0)
            {
                it.style.backgroundColor = "#808080";
            }
            else
            {
                it.style.backgroundColor = "yellow";
            }

        }
    }

    ele = document.getElementById("0");
    ele.style.backgroundImage = "none";
    ele.style.backgroundImage = "url('data:image/jpeg;base64,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')";

    ele.style.backgroundSize = "100%";

    last = document.getElementById("80");
    last.style.backgroundImage = "url('https://media.istockphoto.com/vectors/red-apple-illustration-icon-vector-vector-id1045495508?k=6&m=1045495508&s=612x612&w=0&h=d_P7mpubzh6ZBgyrIi9--XT0rYcEdRQX_y-isdmStlQ=')";
    last.style.backgroundSize = "100%";




}

function updateColor(i,j){
    elem = document.getElementById(i * 9 + j);
    if(i == 0 && j == 0)
    {
        return ;
    }
    if(arr[i][j] == 0)
    {
        elem.style.backgroundImage = "none";
        elem.style.backgroundImage = "url('https://thumbs.dreamstime.com/b/anti-rat-sign-insecticide-simple-vector-158096934.jpg')";
        elem.style.backgroundSize = "100%";
    }
    else
    {

        elem.style.backgroundImage="url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8zqFIkpEih06wWokEvp08up04opUu63sIPoT4hpEcbo0Nnunu43cBiuHef0quVzaLx+fNSsmr5/fqu2LfK5tHg8ORNsWbp9ew4qlZFrmCJx5eCxZGn1bJru37A4MfU6tl1v4aPyZzO59RctnKExZN3lt1UAAAIiUlEQVR4nO2d25qqOBCFJQ3SJJ6PoK1g637/VxxQuz1BrEpSSXq+/Fdz03tYLlJVORW9XiAQCAQCgUAgEAgEAoEAmGleLcvhbnJmNyyXVT51/UyGmC93k/2s4LHgnLP0DKv/U8Q8Wu+/d+VfFjo9jvdRJljaT6JWkn4tNkv2k+UflDlfTmZcsC5tD/RTwdfff0plvhjEIoWIu9mZ8uy0y10/OYjpYiY4St2vl0ys/RdZDhTlXa1k8Wg4dy2im9WW8766vKtILr4q10raWY7iVFfehTSela7VvFJuhMbb+UxfFEPXih75NKqvIeHFwrWqG8e1aX1XjUvXyi6sRjGBvrNGcapcq6uLl22mHT4lGrOD69xRpoxOX0PKnA7H6SCm1dcgTitnAnemEqCcJBu70Tc9CRv6GvjMRblaCsII80wS2y8AvjN7+hriL7v65iduV2AUsbXNKfKqsBJiHklYZU1gSVXEvJEY20qNY8tD8Ea8tSJway1JvCIOFgQeHAqsM+OIXODIehB9JJ1RCyQutAES16QCT84FErvog8Ba4oZM4MELgbVEqnCzdRxkbjCapLGzMNuFIr4JBJbOKpk2CAq4lUcONmRHwwLnkZNiWwI3PO2fOZguyUnM5oxvb8LoDaMBdelVlPnBYLSZeuhgg7mhOPBuEF7omxqKQ6czQhnczFLx1FuB9VA0suA/srjyi8VIyig9K2Ye4TttgXNPo8wPQnudeOvJnLCLVDfvr7zM9ffEmiW4z2HmgmawWXodZi4IrY23tW9zphaSQsdCt8ke+PNyjQrcrYVsAwsCSfJHLcyGvTUsGXPlkejUwuyzeQKQROWRWLkMpNnFF5hEoXhYc+8wF54dbAAtECVquzW5w1F4d7gE5GJWqSicuKtIfx2EupgqnUVxN6mIPx8eBOIiV5hilM5e0uw5+ANcVMn6A1dxJvt8eZb3EhXqb2erMy8OwiTiV2wWjtZIWxwESWQTrMKTm5e01UGIRPRr6igZdjjYsHlTQmJf06GTl1RyivTjXXZmyNVhJxWbxMHx2xoZW7m5eEljHYF1+Y3apzk6UNgZZGACI979A7UwsV+yab2iDbjadGZ97qvrIHIebH9LVOYgdFE6QwzEyvYw1HewhiNm+jvLU0PtMXgmRRyUOtjNhpJEjxAYJYhjmYXVQGPGwZo++Cbf1OqGk2aivwOe860GGkmQ+UAuZ8JDjc2yW/KKYgVG7AOq0GJFY9BBTFVjb2IhcxAfDPonqEJr+xVGHazpQxXaShYmx+DlHwQKtFWVymb0aptCMTBdTO3sORl3sE6IFUyhnXQoSfSqAiMBbDNhZeuXwEH4ZnBpYRySCIwY8JTbJ1ohqKXXPabTxBXoiuICOztkh3fLtU9k3QWkQqK/exCgQuz8l+97U9R1DCIH67INuHnxdnn5kVpgnWEKeKVHMwYbUuBN6DFKIduf/2iaQCVSpIkrJAr54PpXeQSTSOcgjcKrgw1TkERCB+EKEeOQDe7+DuIipYPw1TZ4trhzsOG9i7QCwRvB4EWMBwcb8jfhhixN/DwQMB9Cq7YnBxvkLpqd0bc9EbBqA1beLw6eJUpcpHYQXnnDZk+tAmXhhngMnhUCZ0855P+XtgvsHoukaeIKdAYMWsVIu3+gVhctOAhfxegVEIVdHra7aMPB+meEblyAVhM7xmG7RCsOyl6sJ2ArwjKJTy+qJYHw7TXgqr7UxfvXgD5NXIDf8oKe2mPdPUbyuykxeaL/fR7wsSjwcqLMxd+1G1sOYnbX4DukABctjcEGxOE9+KLLWxftpIkLKbxfLWJ7Tepi36aDqLN7qFm+LKLaFAie4Teg1vUlElfWgkwD5ujeFLfaptCYikAgvCptwO0CS1y0KBB3g+0bd1YB66LZRH8Fd28du8GGc5HCQew9yzn6KAvCRRqByFPQvQF2vwzuIpFA7IUL/JUZqItEAtGXZhRulMBcpBKIv/ikcGoIIpFMIP62s8ox4fcvKplA1AHhC6AlxWfeuUgnMBL4fkojlaNfchdJEv0FlQ4n+BMZDTIXCR0E71g8oHaqpttFQgcVmykha9MfulykdFCxl5Jqx9J2F0kFRnGlolD5Nnebi7QCVTspKZ/ge5VIK1C9fQvyLNeN5xeVNMjo9FFSb6vw6CKxgzqN95RNfHCR2EHEltMrn+pnaW8uUjuo1ztR3cRfF8kd1GiE1dNrcHJxkdxBrWZmNTON6zONi/QCdVuYVlpHdvcWevFDz+d3ctC55dWnv20Lv+vUhc9dhBsMdBLeeS0R35amBZ1gQ41W38tffG5Dq9an7YWxp03n63f0nxGBLrpkwDDzjjYorSxawExH9jNDLyUK/W7lN7487OotOR2pgn8tk5PC7Nee/fuIh8FBeOHoWVaMFdvOSlh4FW0ExWeeJx4VqJzm68AHb8Yi2cfzRp5864LwM5Z+fLnLdJ64Z77xQGJSUH6+eg7sA09In1SgBxKpBfZcf201XdONwV/2DpMGm1kQ2OttnVU3Vj7L3bBwVKPGJhbWYBy5g8lUQlBsd5MX1kNqGpmeLr3hYHkwipGVGHPPgltcKU5icDs9g6w21tIGKyoHAmsmsZWAk2SIyzCGsWIji0x/vhnFOCYOqknszsAL+Z7yVU3EyXKOaOO4EVQaeWEzyUtYRCTDkaUml+012aXG6zjGJ9ZzvJRFYVJjwpMPv/Q1DDem4mpfFOY+Km6U40EwbSMTFu91j8gQMt0VItUQmaQiGhv7YjoRq8kmU3MySePiu3L9/CBW443gSCtTLjYTD7I7mPzzq8iAKpOUx9Fh6PvL2UJebmeJ4KxbZ9KvrUvX2+FfMu+ZvBwfNiKLBeeMpVcY41zEWbw5TMqVf3lPhXleLYeL8eTfV82/yXg3XFb5/0NaIBAIBAKBQCAQCAQCgYAh/gME76kAJrFMhQAAAABJRU5ErkJggg==')";
        elem.style.backgroundSize = "100%";
    }
}

function isSafe(i,j){
    if(i < 9 && j < 9 && arr[i][j] == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }

}

function solveMazeRecur(i,j){
    if(i == 8 && j == 8)
    {
        direction.push(9*i + j);
        arr[i][j] = 1;
        //updateColor(i,j);
        return 1;
    }

    if(isSafe(i,j) == 1)
    {
        console.log( i + " " + j + "is safe");
        arr[i][j] = 1;
        updateColor(i,j);
        direction.push(9*i + j);


        if(solveMazeRecur(i+1,j) == 1)
        {
            return 1;
        }
        else if(solveMazeRecur(i,j+1) == 1)
        {
            return 1;
        }
        arr[i][j] = 0;
        updateColor(i,j);
        direction.pop();
        return 0;
    }


}

function solveTheMaze(){
    if(solveMazeRecur(0,0) == 0)
    {

        return 0;
    }

    return 1;

}



var generate = document.getElementById("generate-sudoku");

var path = document.getElementById("solve");


generate.onclick = function(){
    getInput();
}

function printPath(direction)
{
    answer = "There is a path ";
    let pp = direction.length;
    for(let i = 0 ; i < pp ; i++)
    {
        answer += ' ' + direction[i] ;

    }

    return ans;

}



path.onclick = function(){
    ans = solveTheMaze();
    var v = document.getElementById("output");
    if(ans == 1)
    {

        res.innerHTML = "Path Possible";
        printPath(direction);
    }
    else
    {
        res.innerHTML = "No valid Path ";
    }



}
