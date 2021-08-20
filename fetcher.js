
const request = require('request');
const fs = require('fs');
//saving the args from the user without the first two
const args = process.argv.slice(2);

request(args[0], (error ,response, body) => {
  //checking if URL valid
  if (!response || response.statusCode !== 200) {
    console.log("There's a problem with the url")
  } else {
    if(!error){
      try{
        const exists = fs.existsSync(args[1]);
        fs.writeFile(args[1], body, (err) =>  {
        if (err) {
          console.error(err);
          return
        }
        //if the path file exists write a message to the user else just rewrite
        if(!exists) {
          console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}.`);
        }    
      })
    }
    catch (err1) {
      console.log(err1);
    }
    
  }
    }
});


