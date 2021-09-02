const Button = ({ kind, children }) => {
  return <button className={kind}>{children}</button>
}

const ButtonArticle = ({ kind, article, handleContent }) => {
  const showArticle = () => {
    handleContent(article)
  }
  return (
    <button className={kind} data-js='btn-article' onClick={showArticle}>
      ler
    </button>
  )
}

export { Button, ButtonArticle }
