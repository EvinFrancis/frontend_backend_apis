import React , { useEffect, useState } from 'react'
import bg1 from '../images/add.jpg'
import { add_new_student} from '../services/api';
import { get_one_student_api } from '../services/api';
import {update_student_api} from '../services/api'

function Registrations({studId}) {
  const [student,setStudent]=useState({
    name:"",
    email:"",
    mobile:"",
    course:"",
    college:"",
    place:""
  })

  async function save_student() {
     let result 
     console.log(result)
     if(studId){
      let result = await update_student_api(studId,student)
     }
     else{
      let result = await add_new_student(student)
     }
    
  }

  //------------------------------------------

  async function fetch_stud_data(studId) {
    let result = await get_one_student_api(studId)
    if (result.status > 199 && result.status < 300) {
    setStudent(result.data)
  }
    console.log(result)
    
   
 }
 useEffect(() => {
  if (studId) {
    fetch_stud_data(studId);
  }
}, [studId]);





 //calls api with selected studetns id
 // get that student data from backend
 //store it in state student 
 //form imputs automatically fills because of state student
//------------------------------------------
 

  return (
    <div style={styles.container} id="addstudent">

      <div style={styles.formBox}>
        <h2 style={styles.title}>{studId?"Update Student":"Add New Student"}</h2>

        <form onSubmit={save_student}>

          <input type="text" placeholder="Student Name" style={styles.input}
          onChange={(e) => setStudent({ ...student, name: e.target.value })} value={student.name} />

          <input type="email" placeholder="Email" style={styles.input} 
          onChange={(e) => setStudent({...student,email:e.target.value})} value={student.email}/>

          <input type="text" placeholder="Mobile" style={styles.input}
          onChange={(e) => setStudent({...student,mobile:e.target.value})} value={student.mobile} />

          <input type="text" placeholder="Course" style={styles.input} 
          onChange={(e) => setStudent({...student,course:e.target.value})} value={student.course}/>

          <input type="text" placeholder="College" style={styles.input} 
          onChange={(e) => setStudent({...student,college:e.target.value})} value={student.college}/>

          <input type="text" placeholder="Place" style={styles.input}
          onChange={(e) => setStudent({...student,place:e.target.value})}  value={student.place}/>

          <button type="submit" style={styles.button}>
            {studId?"Update Student":"Save"}
          </button>

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