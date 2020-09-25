//get home page
const index = (req, res) =>{
    res.render('index', {title: 'My express'});
};


module.exports = {
    index
}