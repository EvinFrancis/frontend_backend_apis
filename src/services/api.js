import axios from "axios";




const BASE_URL = 'http://127.0.0.1:8000/studapp/stud/';



// axios works asynchrousnously , that means it takes to talk to the server,
// async   : thsi function will taks time and will return a promise.
// await : wait untill the api responesee comer before moving to next line

export async function get_all_students() {
    return await axios.get(BASE_URL)
    
    
}

// Send post request
// Add new student
export async function add_new_student(data) {
    return await axios.post(BASE_URL, data)
}

// ............update daata .............
//sends get method
//get one student data frist....base on the id
export async function get_one_student(id) {
    return await axios.get(BASE_URL+ `${id}/` )
}

// send put request
// update student data
export async function update_student(id,data) {
    return await axios.put(BASE_URL+ `${id}/`, data)
}
//////////...........................



// send delete request
// delete student data
export async function delete_student(id) {
    return await axios.delete(BASE_URL+ `${id}/`)
}