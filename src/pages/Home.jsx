import React from 'react'
import bg from '../images/8664.jpg'

function Home() {
  return (
    <div style={styles.container} id="home">
      
      <div style={styles.overlay}>
        <h1 style={styles.title}>Student Registration System</h1>

        <p style={styles.subtitle}>
          Manage and register students easily
        </p>

        <button style={styles.button}>
          Register Student
        </button>
      </div>

    </div>
  )
}

const styles = {

  container: {
    backgroundImage: `url(${bg})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "50px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
    marginLeft: "-400px",
    
  },

  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px"
  },

  subtitle: {
    fontSize: "20px",
    marginBottom: "30px"
  },

  button: {
    padding: "12px 30px",
    fontSize: "18px",
    border: "none",
    backgroundColor: "#0d6efd",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer"
  }

}

export default Home