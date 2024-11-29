import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
      <Navbar />
      <div style={{margin:"5rem 5rem",textAlign:"justify"}}>
        <p>TextUtils is a versatile web application designed to simplify text manipulation tasks. Whether you need to convert text to uppercase, lowercase, or capitalize each word, TextUtils provides an easy-to-use interface to handle it all. With just a few clicks, you can transform any text to suit your formatting needs. Key features include:</p>

        <ul>
          <li><p> <strong>Case Conversion:</strong> Instantly convert text between uppercase, lowercase, and title case.</p></li>
          <li><p> <strong>Text Formatting:</strong> Tidy up or modify text quickly without needing complex tools.</p></li>
          <li><p><strong>Word Count:</strong> Check the number of words and characters in real-time.</p></li>
        </ul>
        TextUtils is perfect for anyone who needs quick, reliable text transformation — from students and writers to developers and content creators!
      </div>
    </>
  )
}

export default About