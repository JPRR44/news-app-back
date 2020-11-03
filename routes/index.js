const express = require('express');
const router = express.Router();
const newsController = require('./../src/controllers/news.controller');
const testController = require('./../src/controllers/test.controller');

// router.get('/news', newsController.getAll);
// router.get('/news/:noticiaID', newsController.getById);

// router.get('airbnb', testController.getAll);



// router.post('/auth', function(req, res) {
//   console.log('Auth: ', req.body);
//   res.send('ok');
// });

// router.post('/auth2', function(req, res) {
//   console.log('Auth2: ', req.body);
//   res.send('ok');
// });


  //********ROUTES FOR REQUESTS ON HOMEWORK*********/

//TOP HEADLINES ROUTE
router.get("/topheadlines/:country?", newsController.topHeadlines);
//NEWS ROUTE
router.get("/noticias/:fuente?", newsController.noticias);

//SOURCES ROUTE
router.get("/fuentes", newsController.fuentes);

//http:server.php/endpoint/?fuente&search
module.exports = router;











