import React from "react"

const OrderedWordList = ({ words }) => (
  <ol>
    {words.map((word, i) =>
    <li key={i}>{word.word}</li>
    )}
  </ol>
)

export default OrderedWordList

