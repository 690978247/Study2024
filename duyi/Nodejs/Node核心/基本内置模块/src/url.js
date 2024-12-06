 const URL = require("url")

 const url = new URL.URL("https://nodejs.org/docs/latest/api/url.html")
//  const url = URL.parse("https://nodejs.org/docs/latest/api/url.html")

 console.log(url, url.searchParams.has('a'));