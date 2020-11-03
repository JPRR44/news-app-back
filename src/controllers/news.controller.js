const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

class News {
  getAll(req, res) {
    console.log('Query params: ', req.query.test);
    const url = `${apiUrl}everything?q=bitcoin&sortBy=publishedAt&apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Oops! Failed!')
      res.end();
    })
  }

  // getById(req, res) {
  //   res.send('Traer la noticia ' + req.params.noticiaID);
  // }

  //********* END POINTS FOR REQUESTS ON HOMEWORK*********/


  //TOP HEADLINES ENDPOINT
  topHeadlines(req, res) {
    let country = req.params.country || 'mx';
    const url = `${apiUrl}top-headlines?country=${country}&apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Error')
      res.end();
    });
  }

//NEWS ENDPOINT
  noticias(req, res) {
    let sources = req.params.sources || '';
    const url = `${apiUrl}everything?q=${req.query.search}&sources=${sources}&apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.send(response.data.articles);
    }).catch(e => {
      res.send('Error')
      res.end();
    });
  }


//SOURCES ENDPOINT
  fuentes(req, res) {
    let sources = req.params.sources || '';
    const url = `${apiUrl}sources?&apiKey=${apiKey}`;
    axios.get(url).then(response => {
      res.send(response.data.sources);
      console.log(response)
    }).catch(e => {
      res.send('Error')
      res.end();
    });
  }
  
} 



module.exports = new News();

