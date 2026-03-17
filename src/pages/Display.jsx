import React, { useEffect, useState } from 'react'
import bg from '../images/dispaly.jpg'
import { get_all_students } from '../services/api'

function Display() {
  const[students,setStudent]=useState();

 async function display_student(){
  let result = await get_all_students()
  //console.log(result)
  if (result.status>199 && result.status<300){
     setStudent(result.data)

  }

   
 }
 useEffect(()=>{ 
  display_student()
 })



  return (
    <div style={styles.container} id='display'>

      <div style={styles.tableBox}>
        <h2 style={styles.title}>Student List</h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Course</th>
              <th>College</th>
              <th>Place</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {
              students && students.map((i) =>(


                <tr>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.mobile}</td>
                  <td>{i.course}</td>
                  <td>{i.college}</td>
                  <td>{i.place}</td>
                  
                </tr>
              ))
            }
           

            
          </tbody>
        </table>
      </div>

    </div>
  )
}

const styles = {

  container:{
    backgroundImage:`url(${bg})`,
    minHeight:"150vh",
    backgroundSize:"cover",
    backgroundPosition:"center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },

  tableBox:{
    backgroundColor:"rgba(255,255,255,0.95)",
    padding:"40px",
    borderRadius:"10px",
    width:"90%"
  },

  title:{
    textAlign:"center",
    marginBottom:"20px"
  },

  table:{
    width:"100%",
    borderCollapse:"collapse"
  }

}

export default Display