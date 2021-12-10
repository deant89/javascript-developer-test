const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  //Map over urls recieved
  const urlsMap = urls.map(async (url) => {
    //store response
    const res = await httpGet(url);
    //store message from response
    const { message } = JSON.parse(res.body);
    //return approriate object depending on status code
    if (res.status === 200) return { "Arnie Quote": message };
    if (res.status === 500) return { "FAILURE": message };
    else return res;
  });
  return Promise.all(urlsMap);
};

module.exports = {
  getArnieQuotes,
};
