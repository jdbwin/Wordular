import React from 'react'

import './styles.scss'

const Results = ({
  results,
  word
}) => (
  <div className="content is-small">
    {results && Object.keys(results).map((result, index) => (

    <div key={index}>
      {/* hide part of speech if undefined */}
      {result && <h3 styleName="part-of-speech">{result}</h3>}

      <ol type="I">
        {results[result].map((result, index) => (
          <li styleName="definition" key={index}>{result.text}</li>
        ))}
      </ol>
    </div>

    ))}
  </div>
)

export default Results

