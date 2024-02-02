

import express from "express";

const app = express();



app.get("/",(req,res)=>{
  res.send("<h1>welcome </h1>")
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 
/* app.use(express.static('public')); // Serve static files from the 'public' directory



// Middleware to set the correct MIME type for JavaScript files
app.get('*.js', (req, res, next) => {
  res.type('text/javascript');
  next();
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); */


//user authentifcaion:

//store correct pass

//accept via post

//response a webpage post verifhication