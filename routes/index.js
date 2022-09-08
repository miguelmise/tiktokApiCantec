var express = require('express');
var router = express.Router();
const TikTokScraper = require('tiktok-scraper');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Analizador de tiktoks CANTEC S.A');
});

router.post('/video',function(req,res,next){
  (async () => {
    try {
      let link = req.body.enlace;
        const videoMeta = await TikTokScraper.getVideoMeta(link);
        res.json(videoMeta);
    } catch (error) {
      res.json(error);
    }
  })();
})

module.exports = router;
