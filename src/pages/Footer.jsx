import React from 'react'

function Footer() {
  return (
    <footer style={styles.footer}>

      <div style={styles.container}>

        <p style={styles.text}>
          © 2026 Student Registration System | Developed by Evin
        </p>

      </div>

    </footer>
  )
}

const styles = {

  footer:{
    backgroundColor:"#212529",
    color:"white",
    padding:"15px 0",
    textAlign:"center",
    position:"fixed",
    bottom:"0",
    width:"100%"
  },

  container:{
    maxWidth:"1200px",
    margin:"auto"
  },

  text:{
    margin:0,
    fontSize:"14px"
  }

}

export default Footer