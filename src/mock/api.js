const fs = require('fs');
const path = require('path');
/**
 * 读取mock目录下的data数据
 * @param {*} filename
 */
function fromJSONFile(filename) {
    return (req, res) => {
        const data = fs.readFileSync(path.resolve(`src/mock/data/${filename}.json`)).toString();
        const json = JSON.parse(data);
        return res.json(json);
    };
}
const proxy = {
    'GET /daduhui/test': fromJSONFile('test'),//test
    'GET /book/getBookList': fromJSONFile('bookList'),//bookList
    'POST /login': fromJSONFile('login'),//bookList
};
module.exports = proxy;