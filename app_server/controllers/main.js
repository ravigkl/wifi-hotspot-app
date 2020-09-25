//get home page
const index = (req, res) =>{
    res.render('index', {title: 'My express on Heroku'});
};


module.exports = {
    index
}