var Crawler = require("crawler");
var colors = require(`colors/safe`);
var fs = require('fs');


var c = new Crawler({
    maxConnections: 10,
    // rateLimit: 10, 
    // This will be called for each crawled page
    callback: function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            console.log(colors.red(`----------start----------`));
            console.log(colors.green(res.options.uri))
            const segments = res.options.uri.split('/');
            const searchPage = segments[segments.length - 1];
            const searchPageInfo = searchPage.split('-');
            const state = searchPageInfo.pop();
            const city = searchPageInfo.pop();
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            const title = $("title").text();
            console.log(colors.magenta(title));
            if (title.toLowerCase().indexOf(city.toLowerCase()) < 0) {
                console.log(colors.cyan(`Missing string ${city}`));
                console.log(colors.yellow($("head").html()));
                fs.writeFile('pages/' + searchPage + '.html', res.body, function (err) {
                    console.log(colors.red(err));
                });
            } else {
                // fs.writeFile('pages/' + searchPage + '-valid.html', res.body, function (err) {
                //     console.log(colors.red(err));
                // });
            }
            // console.log(colors.magenta($("meta")));
            console.log(colors.red(`-----------end-----------`));
        }
        done();
    }
});

let domain = `https://qa-beta.theknot.com`;
// domain = 'http://qa.marketplace.theknot.com:3000';
domain = 'https://mp-web-pr-361.k8s.localsolutions.theknot.com';
const urls = [`${domain}/marketplace/wedding-videographers-amite-la`, `${domain}/marketplace/wedding-videographers-amsterdam-ny`, `${domain}/marketplace/wedding-videographers-anacortes-wa`, `${domain}/marketplace/wedding-videographers-anaheim-ca`, `${domain}/marketplace/wedding-videographers-anchorage-ak`, `${domain}/marketplace/wedding-videographers-andalusia-al`, `${domain}/marketplace/wedding-videographers-anderson-in`, `${domain}/marketplace/wedding-videographers-anderson-sc`, `${domain}/marketplace/wedding-videographers-andover-ma`, `${domain}/marketplace/wedding-videographers-andover-nj`, `${domain}/marketplace/wedding-videographers-andrews-nc`, `${domain}/marketplace/wedding-videographers-andrews-sc`, `${domain}/marketplace/wedding-videographers-angier-nc`, `${domain}/marketplace/wedding-videographers-angleton-tx`, `${domain}/marketplace/wedding-videographers-angola-in`, `${domain}/marketplace/wedding-videographers-ankeny-ia`, `${domain}/marketplace/wedding-videographers-ann-arbor-mi`, `${domain}/marketplace/wedding-videographers-anna-maria-fl`, `${domain}/marketplace/wedding-videographers-anna-tx`, `${domain}/marketplace/wedding-videographers-annapolis-md`, `${domain}/marketplace/wedding-videographers-anniston-al`, `${domain}/marketplace/wedding-videographers-anoka-mn`, `${domain}/marketplace/wedding-videographers-anthony-nm`, `${domain}/marketplace/wedding-videographers-antioch-il`, `${domain}/marketplace/wedding-videographers-apache-junction-az`, `${domain}/marketplace/wedding-videographers-apalachicola-fl`, `${domain}/marketplace/wedding-videographers-apex-nc`, `${domain}/marketplace/wedding-videographers-apopka-fl`, `${domain}/marketplace/wedding-videographers-apple-river-il`, `${domain}/marketplace/wedding-videographers-apple-valley-ca`, `${domain}/marketplace/wedding-videographers-apple-valley-mn`, `${domain}/marketplace/wedding-videographers-appleton-wi`, `${domain}/marketplace/wedding-videographers-aptos-ca`, `${domain}/marketplace/wedding-videographers-aquebogue-ny`, `${domain}/marketplace/wedding-videographers-arab-al`, `${domain}/marketplace/wedding-videographers-arabi-la`, `${domain}/marketplace/wedding-videographers-aransas-pass-tx`, `${domain}/marketplace/wedding-videographers-arcadia-fl`, `${domain}/marketplace/wedding-videographers-arcata-ca`, `${domain}/marketplace/wedding-videographers-arden-de`, `${domain}/marketplace/wedding-videographers-arden-nc`, `${domain}/marketplace/wedding-videographers-ardmore-ok`, `${domain}/marketplace/wedding-videographers-ardmore-pa`, `${domain}/marketplace/wedding-videographers-argyle-tx`, `${domain}/marketplace/wedding-videographers-arizona-city-az`, `${domain}/marketplace/wedding-videographers-arlington-heights-il`, `${domain}/marketplace/wedding-videographers-arlington-va`, `${domain}/marketplace/wedding-videographers-arlington-vt`, `${domain}/marketplace/wedding-videographers-arlington-wa`, `${domain}/marketplace/wedding-videographers-arnold-ca`, `${domain}/marketplace/wedding-videographers-arnold-mo`, `${domain}/marketplace/wedding-videographers-arroyo-grande-ca`, `${domain}/marketplace/wedding-videographers-artesia-nm`, `${domain}/marketplace/wedding-videographers-arvada-co`, `${domain}/marketplace/wedding-videographers-asbury-nj`, `${domain}/marketplace/wedding-videographers-asbury-park-nj`, `${domain}/marketplace/wedding-videographers-ashburn-va`, `${domain}/marketplace/wedding-videographers-asheboro-nc`, `${domain}/marketplace/wedding-videographers-asheville-nc`, `${domain}/marketplace/wedding-videographers-ashford-wa`, `${domain}/marketplace/wedding-videographers-ashland-city-tn`, `${domain}/marketplace/wedding-videographers-ashland-ky`, `${domain}/marketplace/wedding-videographers-ashland-ma`, `${domain}/marketplace/wedding-videographers-ashland-oh`, `${domain}/marketplace/wedding-videographers-ashland-wi`, `${domain}/marketplace/wedding-videographers-ashtabula-oh`, `${domain}/marketplace/wedding-videographers-aspen-co`, `${domain}/marketplace/wedding-videographers-assonet-ma`, `${domain}/marketplace/wedding-videographers-astoria-ny`, `${domain}/marketplace/wedding-videographers-astoria-or`, `${domain}/marketplace/wedding-videographers-atascadero-ca`, `${domain}/marketplace/wedding-videographers-atglen-pa`, `${domain}/marketplace/wedding-videographers-athens-al`, `${domain}/marketplace/wedding-videographers-athens-ga`, `${domain}/marketplace/wedding-videographers-athens-oh`, `${domain}/marketplace/wedding-videographers-athens-tn`, `${domain}/marketplace/wedding-videographers-athens-tx`, `${domain}/marketplace/wedding-videographers-atlanta-ga`, `${domain}/marketplace/wedding-videographers-atlantic-beach-nc`, `${domain}/marketplace/wedding-videographers-atlantic-beach-ny`, `${domain}/marketplace/wedding-videographers-atlantic-city-nj`, `${domain}/marketplace/wedding-videographers-attica-ny`, `${domain}/marketplace/wedding-videographers-attleboro-ma`, `${domain}/marketplace/wedding-videographers-aubrey-tx`, `${domain}/marketplace/wedding-videographers-auburn-al`, `${domain}/marketplace/wedding-videographers-auburn-ca`, `${domain}/marketplace/wedding-videographers-auburn-ga`, `${domain}/marketplace/wedding-videographers-auburn-hills-mi`, `${domain}/marketplace/wedding-videographers-auburn-in`, `${domain}/marketplace/wedding-videographers-auburn-ma`, `${domain}/marketplace/wedding-videographers-auburn-me`, `${domain}/marketplace/wedding-videographers-auburn-ny`, `${domain}/marketplace/wedding-videographers-auburn-wa`, `${domain}/marketplace/wedding-videographers-augusta-ga`, `${domain}/marketplace/wedding-videographers-augusta-ks`, `${domain}/marketplace/wedding-videographers-augusta-me`, `${domain}/marketplace/wedding-videographers-aurora-co`, `${domain}/marketplace/wedding-videographers-aurora-ny`, `${domain}/marketplace/wedding-videographers-aurora-oh`, `${domain}/marketplace/wedding-videographers-austin-mn`, `${domain}/marketplace/wedding-videographers-austin-tx`];

c.queue(urls);
