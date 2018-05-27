function errorHandler(req, res){
        res.sendHtml('./error.html')
        return;
}

module.exports = errorHandler;