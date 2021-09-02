const Button = ({ kind, children }) => {
  return <button className={kind}>{children}</button>
}

const ButtonArticle = ({ kind, title, text }) => {
  return (
    <button
      className={kind}
      data-js='btn-article'
      onClick={e => {
        const articleTitle = document.querySelector('[data-js="article-title"]')
        const articleText = document.querySelector('[data-js="article-text"]')
        articleTitle.innerHTML = title
        articleText.innerHTML = text
      }}
    >
      ler
    </button>
  )
}

export { Button, ButtonArticle }
