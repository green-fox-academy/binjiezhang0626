'use steict'
const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=the+moon+landing+by+Apollo+11&api-key=ok8dG2DZLb2WbRmLU6S2sYHI2c7Sl3mQ'
const createAnArticle = (headline, snippet, date, link) => {
  let article = document.createElement('article')
  let head = document.createElement('h1')
  head.textContent = headline
  article.appendChild(head)

  let snip = document.createElement('p2')
  snip.textContent = 'Snippet: ' + snippet
  article.appendChild(snip)

  let pubDate = document.createElement('p')
  pubDate.textContent = 'Publication date: ' + date
  article.appendChild(pubDate)

  let url = document.createElement('a')
  url.textContent = link
  url.href = link
  article.appendChild(url)

  return article
}

const appendArticlesToUl = articles => {
  let ul = document.createElement('ul')
  ul.style.listStyle = 'none'
  document.body.appendChild(ul)

  articles.forEach(article => {
    let li = document.createElement('li')
    li.appendChild(article)
    ul.appendChild(li)
  })
}

const dataRequest = new XMLHttpRequest()

dataRequest.onreadystatechange = () => {
  if (dataRequest.readyState === 4) {
    docs = JSON.parse(dataRequest.response).response.docs
    let articles = []
    docs.forEach(doc => {
      let { headline, snippet, pub_date, web_url } = doc
      let article = createAnArticle(headline.main, snippet, pub_date, web_url)
      articles.push(article)
    })
    appendArticlesToUl(articles)
  }
}
dataRequest.open('GET', URL)
dataRequest.send()

console.log(dataRequest)