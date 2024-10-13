// ./compo/Teacher.js
import React from 'react';

const Teacher = () => {
  return (
    <div style={styles.container}>
      <h1>Teacher Page</h1>
      <p>This is the teacher page.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    minHeight: '100vh', // Ensure the content fills the screen height
    backgroundColor: '#f9f9f9', // Light background color
  },
};

export default Teacher;
