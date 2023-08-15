//1. importing require module
const express = require ('express'); 
//2. creates instance of the express application  
const app = express();  
//3. defines port where server will listen for requests               
const PORT = 3000;                     

//4. defines routes and handle requests
app.get('/', (req, res) => {                     
    res.send('99 Bottles of beer on the wall<br><a href="/98">Take one down, pass it around</a>');
});

//5. handle dynamic routes and display bottle count
app.get('/:number_of_bottles', (req, res) => {
    //parse parameter into an integer
    const bottles = parseInt(req.params.number_of_bottles);

    //if no bottles left
    if (bottles === 0) {
        //display this message and provide link
        res.send('No more bottles of beer on the wall! <a href="/>Again</a>');
      //if there are bottles left
    } else {
        //subtract 1 bottle from current bottles
        const nextBottle = bottles - 1;
        //respond by displaying next bottle count, link to next count, and link to start again
        res.send(`${bottles} Bottles of beer on the wall<br><a href="/${nextBottle}">Take one down, pass it around</a><br><a href="/">Again</a>`)
    }
    
});


//6. start server and listen on defined port
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});




/* 
4. app.get('/') defines the route that handles request to root URL ("/"). once that URL is accessed, it shows sent text and the link
5. app.get('/:number_of_bottles') defines the route that handles request with dynamic parameter number_of_bottles representing the current # of bottles. 
6. the app.listen() function takes a callback that's executed when server starts logging the message "Listening on port 3000
*/