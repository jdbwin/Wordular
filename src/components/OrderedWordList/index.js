import React from "react"

import './styles.scss'

const OrderedWordList = ({
  getFeaturedWordDefinition,
  words
}) => (
  <ol>
    {words.map((word, key) =>
    <li
      styleName="main"
      key={key}
      onClick={() => getFeaturedWordDefinition(word.word)}
    >
      {word.word}
    </li>
    )}
  </ol>
)

export default OrderedWordList

