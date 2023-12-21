import React from 'react'
import '../style/AboutStyle.css'

const Discussion = () => {
  return (
    <div className='discuss'>
      <h1>Discussing the Data</h1>
      <h2>Racial Categories and Data Collection</h2>
      <ul>
        <li>In the graphs below, I focus on Black students versus the total student population. I quickly came to an issue regarding how racial and ethnic data has been historically collected. </li>
        <li>There is only the option for “Black, not hispanic” in the choices given to students, which forces those of afro-latinx descent to choose between their heritages, which is wrong.</li>
        <li>It begs several questions on the processes around gathering and organizing this data, and whether we should be collecting it at all if we’re going to limit students to choose against themselves and pick an option that doesn’t accurately represent them. </li>
      </ul>
      <h2>Where is this data from? How did I process it?</h2>
      <ul>
        <li>All the data I used for the visualizations, I gathered from the Integrated Postsecondary Education Data System maintained by the National Center for Education Statistics. I initially wrote a Python script that pulled the data I needed by parsing pdfs, but I eventually decided to compile the data by hand, organize it in a Google spreadsheet, and turn each spreadsheet into a json for the frontend to render. </li>
      </ul>
    </div>
  )
}

export default Discussion