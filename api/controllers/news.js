const { spawn } = require("child_process");

//Helpers
const { response } = require('../helpers/response');
//Utils
const { isDefined } = require('../utils/utils');

exports.postNews = (req, res, next) => {

    if (isDefined(req.body)) {

        const { news } = req.body;

        const process = spawn('python', ["./news.py", news]);

        process.stdout.on('data', (results) => {
            return res.status(201).json(response(201, 'POST', 'News results', results.toString()));
        });

    } else {
        return res.status(400).json(response(400, 'POST', 'Body can\'t be empty', []));
    }

}