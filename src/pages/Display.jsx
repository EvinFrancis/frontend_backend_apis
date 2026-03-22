import React, { useEffect, useState } from 'react'
import bg from '../images/dispaly.jpg'
import { get_all_students } from '../services/api'
import {delete_student_api} from '../services/api'

function Display({setStudId}) {
  const[students,setStudent]=useState([]);

 async function display_student(){
  let result = await get_all_students()
  //console.log(result)
  if (result.status>199 && result.status<300){
     setStudent(result.data)

  }

   
 }

 useEffect(() => {
  display_student();
}, []);


 async function delete_student(id) {
  let result=await delete_student_api(id)
  display_student()
  
 }
 //.............................-------------------
 function get_stud_data(id){
  console.log(id)
  setStudId(id);
 }


 //.............................-------------------



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
                   <td>
          <a style={styles.editBtn} href='#addstudent' onClick={() => get_stud_data(i.id)}>
            Edit
          </a> <br /> <br />

          <a style={styles.deleteBtn}  onClick={() => delete_student(i.id)}>
            Delete
          </a> <br/> <br />
        </td>
                  
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
  },
  actionCell: {
  display: "flex",
  gap: "10px",
  justifyContent: "center"
},

editBtn: {
  background: "linear-gradient(135deg, #28a745, #5cd65c)",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "0.3s",
  boxShadow: "0 3px 8px rgba(0,0,0,0.2)"
},

deleteBtn: {
  background: "linear-gradient(135deg, #dc3545, #ff6b6b)",
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "14px",
  transition: "0.3s",
  boxShadow: "0 3px 8px rgba(0,0,0,0.2)"
}

}

export default Display