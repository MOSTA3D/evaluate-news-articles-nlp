const BASE = "http://api.meaningcloud.com/sentiment-2.1?";
const LANG = "en";


const mockAPIResponse = require('./mockAPI.js')

const PORT = 8081

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const cors = require("cors");

const bodyParser = require("body-parser");
// const fetch = require("node-fetch");
// import fetch from "node-fetch";
const request = require("request");


app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


function getArticleData(url){
    return new Promise(function(res, rej){
        request(url, {json: true}, (err, _, body)=>{
            if(err){
                return console.log("error", err);
            }
            res(body);
        });
})
}

// const requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
//   .then(response => ({
//     status: response.status, 
//     body: response.json()
//   }))
//   .then(({ status, body }) => console.log(status, body))
//   .catch(error => console.log('error', error));



app.get('/', function (req, res) {
    res.sendFile('../../dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post("/", function(req,res){
    console.log("this from post route", process.env.API_KEY);
    getArticleData(`${BASE}key=${process.env.API_KEY}&url=${req.body.url}&lang=${LANG}`).then(({irony, score_tag, agreement, subjectivity, confidence})=>{
        const polarity = score_tag;
        const response = {irony, polarity, agreement, subjectivity, confidence};
        res.send(response);
    }); //.then(data=>{console.log(data);res.send(data)});
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

