import React from 'react'

const Hero = ({
  title,
  subtitle
}) => (
  <section className='hero is-small is-bold m-t-xl'>
    <div className='hero-body'>
      <div className='container has-text-centered'>
        <h1 className='title'>
          {title}
        </h1>
        <h2 className='subtitle'>
          {subtitle}
        </h2>
      </div>
    </div>
  </section>
)

export default Hero

