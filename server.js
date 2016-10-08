var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
    'article-one': {
        title: 'Article-one | Anu Radha',
        heading: 'Article-one',
        date: '9 oct 2016',
        content: `<p>This is article-one.This is article-one.This is article-one.This is article-one.
                    This is article-one.This is article-one.This is article-one.This is article-one.
                    This is article-one.This is article-one.This is article-one.This is article-one.
                    This is article-one.This is article-one.This is article-one.This is article-one.</p>
                    
                    <p>This is article-one.This is article-one.This is article-one.This is article-one.
                    This is article-one.This is article-one.This is article-one.This is article-one.
                    This is article-one.This is article-one.This is article-one.This is article-one.
                    This is article-one.This is article-one.This is article-one.This is article-one.</p>
                    
                    <p>This is article-one.This is article-one.This is article-one.This is article-one.
                    This is article-one.This is article-one.This is article-one.This is article-one.
                    This is article-one.This is article-one.This is article-one.This is article-one.
                    This is article-one.This is article-one.This is article-one.This is article-one.</p>`
    
    },
    'article-two':{
        title: 'Article-two | Anu Radha',
        heading: 'Article-two',
        date: '10 oct 2016',
        content: '<p>This is article-second.</p>'
},
    'article-three': {
        title: 'Article-three | Anu Radha',
        heading: 'Article-three',
        date: '11 oct 2016',
        content: '<p>This is article-third.</p>'}
};

function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width-device-width, initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
                
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h1>${heading}
                    <div>
                        ${date}
                    </div>
                    <div>
                    ${content}
                    </div>
                </div>
            </body>
        </html>
    
        `;
        return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
