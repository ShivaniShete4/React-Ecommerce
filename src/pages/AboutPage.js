import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => 
{
  return <main>
    <PageHero title='about'/>

    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt='nice desk'/>
      <article >
        <div className='title'>
          <h2>Our Story</h2>
          <div className='underline'></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed aliquam orci, mattis tristique magna. Maecenas at gravida nulla. Vivamus magna nisi, viverra a erat sed, feugiat hendrerit diam. Vivamus eget enim vitae neque varius rutrum. Vivamus nec viverra libero. Fusce sed velit et turpis maximus venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec gravida euismod quam, et pharetra magna porttitor id. Morbi vitae massa id nunc rutrum aliquam vel eu risus. Etiam sit amet lacus vitae nunc tincidunt facilisis. Sed eleifend sed justo vel bibendum. Maecenas vehicula aliquet ante sed ultricies.</p>
        </div>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
