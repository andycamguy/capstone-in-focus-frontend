import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div style={{ backgroundColor: 'cyan', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
    <h1>About</h1>
    <Link href="/dashboard">Calculator</Link>
      <div>
        <h2>Project In-Focus: Understanding Camera Settings and Focal Length</h2>
        <p>
          Welcome to Project In-Focus! This documentation aims to guide you through the ins and outs of our camera settings calculator,
          helping you understand the math behind the scenes and providing you with the knowledge you need to capture stunning photographs.
        </p>
        <h3>How the App Works:</h3>
        <p>
          Our app simplifies the complex world of camera settings by offering a user-friendly interface to calculate essential parameters:
          Object Distance, ISO, Shutter Speed, and Aperture. These settings play a crucial role in achieving the perfect shot, and understanding
          their relationships is key to mastering photography.
        </p>
        <ol>
          <li><strong>Object Distance:</strong> This refers to the distance between your camera and the subject you're photographing. Enter this value,
            and our app will help you determine the other settings.</li>
          <li><strong>ISO:</strong> ISO measures the sensitivity of your camera's sensor to light. Higher ISO values are useful in low-light conditions
            but can introduce noise. Lower ISO values result in cleaner images.</li>
          <li><strong>Shutter Speed:</strong> This determines how long your camera's sensor is exposed to light. Faster shutter speeds freeze action,
            while slower speeds create motion blur.</li>
          <li><strong>Aperture:</strong> Aperture controls the amount of light that enters your camera. Lower f-numbers (wider aperture) let in more light
            and create a shallower depth of field.</li>
        </ol>
        <h3>Understanding Focal Length:</h3>
        <p>Focal length is a fundamental concept in photography. It refers to the distance between your camera's sensor and the lens's focal point.
          Focal length impacts the field of view and perspective of your images.</p>
        <h4>In Layman's Terms:</h4>
        <p>
          Imagine you're looking through a peephole on a door. When you use a small peephole, you see a narrow view of the outside. This is similar to using
          a high focal length (telephoto lens), where distant subjects appear closer. On the other hand, a wide peephole shows more of the surroundings,
          similar to a low focal length (wide-angle lens).
        </p>
        <h4>Digging Deeper:</h4>
        <p>
          If you're curious to learn more about focal length and its impact, you can explore resources like
          <a href="https://en.wikipedia.org/wiki/Focal_length" target="_blank" rel="noopener noreferrer">this Wikipedia article</a> to dive into the technical details.
        </p>
        <h3>Conclusion:</h3>
        <p>
          Project In-Focus empowers you with the knowledge to adjust camera settings like a pro. Understanding the relationships between ISO, shutter speed,
          aperture, and focal length enables you to capture the scenes you envision with precision. Whether you're new to photography or an experienced enthusiast,
          our app guides you toward creating captivating visuals.
        </p>
        <p>
          Feel free to refer to this documentation whenever you need assistance, and remember to experiment with different settings to unleash your creative potential.
          Happy shooting!
        </p>
        
      </div>
    </div>
  );
};

export default About;
