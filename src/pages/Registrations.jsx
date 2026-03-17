import React from 'react'
import bg1 from '../images/add.jpg'

function Registrations() {
  return (
    <div style={styles.container} id="addstudent">

      <div style={styles.formBox}>
        <h2 style={styles.title}>Student Registration</h2>

        <form>

          <input type="text" placeholder="Student Name" style={styles.input} />

          <input type="email" placeholder="Email" style={styles.input} />

          <input type="text" placeholder="Mobile" style={styles.input} />

          <input type="text" placeholder="Course" style={styles.input} />

          <input type="text" placeholder="College" style={styles.input} />

          <input type="text" placeholder="Place" style={styles.input} />

          <button style={styles.button}>Register Student</button>

        </form>
      </div>

    </div>
  )
}

const styles = {

  container:{
    backgroundImage:`url(${bg1})`,
    height:"150vh",
    backgroundSize:"cover",
    backgroundPosition:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },

  formBox:{
    backgroundColor:"rgba(255,255,255,0.9)",
    padding:"40px",
    borderRadius:"10px",
    width:"350px",
    textAlign:"center",marginTop:"0px"
  },

  title:{
    marginBottom:"20px"
  },

  input:{
    width:"100%",
    padding:"10px",
    marginBottom:"15px",
    borderRadius:"5px",
    border:"1px solid #ccc"
  },

  button:{
    width:"100%",
    padding:"12px",
    backgroundColor:"#0d6efd",
    color:"white",
    border:"none",
    borderRadius:"5px",
    fontSize:"16px",
    cursor:"pointer"
  }

}

export default Registrations