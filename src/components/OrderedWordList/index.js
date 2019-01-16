import React from "react"

import styles from './styles.scss'

const OrderedWordList = ({ words, getFeaturedWordDefinition }) => (
  <ol>
    {words.map((word, i) =>
    <li
      styleName="main"
      key={i}
      onClick={() => getFeaturedWordDefinition(word.word)}
    >
        {word.word}
    </li>
    )}
  </ol>
)

export default OrderedWordList

