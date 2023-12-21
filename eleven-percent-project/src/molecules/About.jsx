import React from 'react'
import '../style/AboutStyle.css'
const About = () => {
  return (
    /*
    Who am I
    What this project is
    Why I made it
    */
    <div className='about'>
      <h1>About this Project</h1>
      <h2>Who am I?</h2>
      <p>Hello there! My name is Caziah Mayers. I’m a senior at Brown University studying computer science with a focus in software engineering and africana studies with a focus on Black aesthetic expression and Blackness in technology.</p>
      <h2>What is the eleven percent project?</h2>
      <p>The Eleven Percent Project is a front-end data visualization of the Black student population at Brown from about 1980 to 2022 for the express purpose of demonstrating how little the Black population at Brown has grown despite the ballooning of the student population over the last forty years.</p>
      <p>Tech Stack: HTML, CSS, Javascript, React, Node.js, Victory.js, GitHub</p>
      <h2>Why did I make it?</h2>
      <ul>
        <li>I’ve experienced a lot about the academic machine during my time at Brown. More than anything, I’ve learned how important it is to pass information down to younger students as we rotate in and out of the ivory tower. Sure, institutions like Brown may release breakdowns of class year acceptance rates and the like, but until we can put substantial data side by side, we can’t use it to point out the failings of these institutions. </li>
        <li>The Eleven Percent project is named for the demands of the Black students that walked out in protest of Brown’s biased admissions policies in 1968. One of their demands was that the Black student population be increased to 11% to match the national racial breakdown at the time.</li>
        <li>Not only has the Brown administration not met this demand, the Black student population didn’t hit 7% until 2020. A 5% increase from the percentage at the time. 5% growth after almost sixty years. That’s a problem! The disparities worsen when you focus on Black graduate students, especially.</li>
      </ul>
    </div>
  )
}

export default About