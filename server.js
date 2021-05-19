let express = require('express');
let path = require('path');
let cookieSession = require('cookie-session')

let FeedbackService = require('./services/FeedbackService');
let SpeakerService = require('./services/SpeakerService');

let feedbackService = new FeedbackService('./data/feedback.json');
let speakerService = new SpeakerService('./data/speakers.json');

let app = express();

let routes = require('./routes');

//for reverse proxy to be able to track app
app.set('trust proxy', 1);

app.use(cookieSession({
    name: 'session',
    keys: ['Randomly', 'Created']
}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

let port = 3000;

app.use(express.static(path.join(__dirname, './static')))

app.use('/', routes({
    feedbackService,
    speakerService
}));

app.listen(port, function () {
    console.log(`Express server listening on port ${port}!`);
})