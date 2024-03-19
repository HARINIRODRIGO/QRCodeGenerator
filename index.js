import inquirer from 'inquirer';
import qr from "qr-image";
import fs, { writeFile } from "fs";
let url = "";

inquirer
  .prompt([
   {message: "Type your name: ",
   name:  "name"
}
  ])
  .then((answers) => {
    url = answers.name;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("URL.txt", url, (err) =>{
        if(err) throw err;
        console.log("The file has been saved !");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });