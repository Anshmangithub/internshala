"use client"
import { asyncresumedeleteaccomplishmentstudent, asyncresumedeletecoursesstudent, asyncresumedeleteedustudent, asyncresumedeleteinternshipstudent, asyncresumedeletejobstudent, asyncresumedeleteprojectstudent, asyncresumedeleteresponsibilitystudent, asyncresumedeleteskillstudent } from '@/store/actions/studentActions'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from "./style.module.css"

const page = () => {

          const dispatch =  useDispatch();
 const {student} =   useSelector((state) => state.studentReducers)

 const deleteeduHandler = ()=>{
       dispatch(asyncresumedeleteedustudent())
    
 }

 const deletejobHandler = ()=>{
  dispatch(asyncresumedeletejobstudent())
 }

const deleteinternshipHandler = ()=>{
  dispatch(asyncresumedeleteinternshipstudent())
}


const deleteresponsibilityHandler = ()=>{
  dispatch(asyncresumedeleteresponsibilitystudent())
}

const deletecoursesHandler = ()=>{
  dispatch(asyncresumedeletecoursesstudent())

}
const deleteskillHandler = ()=>{
 dispatch(asyncresumedeleteskillstudent())
}
const deleteprojectHandler = ()=>{
  dispatch(asyncresumedeleteprojectstudent())
}



const deleteaccomplishmentsHandler = ()=>{
  dispatch(asyncresumedeleteaccomplishmentstudent())
}


  return (
    <div>
      <div className={style.profilemain}>
<h2 className={style.resumefont}>Resume</h2>
<div className={style.container}>
  <h3 className='mb-1'>{student && student.firstName} {student && student.lastName}</h3>
  <p className='mb-1'>{student && student.email}</p>
  <p className='mb-1'>+91-{student && student.contact}</p>
<hr />

<h4 className={style.catagoryName}>Education <Link style={{textDecoration : "none"}} href="/student/auth/resume/education">+</Link> </h4>
{
  student && student.resume.education.map((e) =>(
<div className={style.catagory} key={e.id}>
<p className='mb-1' style={{fontSize :"18px"}}><span>{e.passingYear}</span>  {e.collegeName} <span>{e.city} </span></p>
 <p className='mb-1'><span>{e.course}</span> | <span>{e.stream}</span> | <span>{e.cgpa}</span></p> 
 <Link style={{textDecoration : "none" , fontSize : "15px"}} href={`/student/auth/resume/education/${e.id}`}>edit </Link>|<Link style={{textDecoration : "none" ,fontSize : "15px"}} onClick={()=>deleteeduHandler(e.id)} href=""> delete</Link>
 {/* <Link style={{textDecoration : "none" , fontSize : "15px"}}  >edit </Link>|<Link style={{textDecoration : "none" ,fontSize : "15px"}} onClick={()=>deleteeduHandler(e.id)} href=""> delete</Link> */}

</div>
  ))
}



<hr /> 
<h4 className={style.catagoryName}>Work Experence </h4>

<div className={style.catagory}>

  {student && student.resume.jobs.map((e) =>(

  <div key={e.id}>
<p className='mb-1'><span  style={{fontSize :"18px"}}>{e.designation}</span></p>
<p className='mb-1'><span>{e.profile}</span> | <span>{e.organization}</span> | <span>{e.location}</span> | <span>{e.duration}</span> </p>
<p className='mb-1'></p>
<p className='mb-1'><span>{e.description}</span></p>
 
<Link style={{textDecoration : "none" , fontSize : "15px"}} href={`/student/auth/resume/job/${e.id}`}>edit </Link>|<Link style={{textDecoration : "none" ,fontSize : "15px"}} onClick={()=>deletejobHandler(e.id)}  href=""> delete</Link>
</div>


  ))}


{student && student.resume.interships.map((e) =>(

<div key={e.id}>
<p className='mb-1'><span  style={{fontSize :"18px"}}>{e.profile}</span></p>
<p className='mb-1'> <span>{e.organization}</span> | <span>{e.location}</span> | <span>{e.duration}</span> </p>
<p className='mb-1'></p>
<p className='mb-1'><span>{e.description}</span></p>

<Link style={{textDecoration : "none" , fontSize : "15px"}} href={`/student/auth/resume/internships/${e.id}`}>edit </Link>|<Link style={{textDecoration : "none" ,fontSize : "15px"}} onClick={()=>deleteinternshipHandler(e.id)}  href=""> delete</Link>
</div>


))}

</div>

<Link style={{textDecoration : "none"}} href="/student/auth/resume/job">+add Job |</Link>
<Link style={{textDecoration : "none"}} href="/student/auth/resume/internships"> +add Internship</Link>
 <hr />


<h4 className={style.catagoryName}>Position of responsibility <Link style={{textDecoration : "none"}} href="/student/auth/resume/responsibility">+</Link> </h4>

{student && student.resume.responsibility.map((e) =>(


<div className={style.catagory} key={e.id}>
<p>{e.description}</p>
<Link style={{textDecoration : "none" , fontSize : "15px"}} href={`/student/auth/resume/responsibility/${e.id}`}>edit </Link>|<Link style={{textDecoration : "none" ,fontSize : "15px"}} onClick={()=>deleteresponsibilityHandler(e.id)} href=""> delete</Link>
</div>

))}

 <hr />
<h4 className={style.catagoryName}>Tranings/ Courses <Link style={{textDecoration : "none"}} href="/student/auth/resume/courses">+</Link> </h4>

{student && student.resume.courses.map((e) =>(


<div className={style.catagory} key={e.id}>
<p className='mb-1'><span style={{fontSize :"18px"}}>{e.training}</span></p>
<p className='mb-1'><span>{e.organization}</span> | <span>{e.duration}</span></p>
<p className='mb-1'>{e.description}</p>
<Link style={{textDecoration : "none" , fontSize : "15px"}} href={`/student/auth/resume/courses/${e.id}`}>edit </Link>|<Link style={{textDecoration : "none" ,fontSize : "15px"}} href=""> delete</Link>
</div>

))}

 <hr />
<h4 className={style.catagoryName}>Acadmics / Projects <Link style={{textDecoration : "none"}} href="/student/auth/resume/projects">+</Link> </h4>

{
  student && student.resume.projects.map((e) =>(


<div className={style.catagory} key={e.id}>

<p className='mb-1'><span style={{fontSize :"18px"}}>{e.title}</span></p>
<p className='mb-1'>{e.duration}</p>
<p className='mb-1'>{e.description}</p>
<p className='mb-1'><Link href={e.projectlink}>{e.projectlink}</Link></p>
<Link style={{textDecoration : "none" , fontSize : "15px"}} href={`/student/auth/resume/projects/${e.id}`}>edit </Link>|<Link style={{textDecoration : "none" ,fontSize : "15px"}} href=""> delete</Link>
</div>
  ))
}

 <hr />
<h4 className={style.catagoryName}>Skills <Link style={{textDecoration : "none"}} href="/student/auth/resume/skills">+</Link> </h4>

{student && student.resume.skills.map((e) =>(

<div className={style.catagory} key={e.id}>

<p className='mb-1'><span>{e.skills}</span></p>
<Link style={{textDecoration : "none" , fontSize : "15px"}} href={`/student/auth/resume/skills/${e.id}`}>edit </Link>|<Link style={{textDecoration : "none" ,fontSize : "15px"}} href=""> delete</Link>
</div>

))}

 <hr />
<h4 className={style.catagoryName}>Accomplishments <Link style={{textDecoration : "none"}} href="/student/auth/resume/accomplishments">+</Link> </h4>

{student && student.resume.accomplishments.map((e) =>(

<div key={e.id} className={style.catagory}>

<p className='mb-1'>{e.descriptions}</p>
<Link style={{textDecoration : "none" , fontSize : "15px"}} href={`/student/auth/resume/accomplishments/${e.id}`}>edit </Link>|<Link style={{textDecoration : "none" ,fontSize : "15px"}} href=""> delete</Link>
</div>

))}

 <hr />
</div>
</div>

    </div>
  )
}
//     <div className='container'>
 
//    <h3>Education 
//     <Link className='mx-3' href="/student/auth/resume/education">+</Link>
//    </h3>
//  <ul className='list-group'>{student && student.resume.education.map((e) =>( <div className='list-group-item' key={e.id}>{JSON.stringify(e)} 

//   <Link className='mx-3 btn btn-sm btn-primary' href={`/student/auth/resume/education/${e.id}`}>edit</Link>
//   <button onClick={()=>deleteeduHandler(e.id)} className='btn btn-sm btn-danger'>delete</button>
//  </div>))}</ul>

//  <br />
 
//  <h3>Jobs 
//     <Link className='mx-3' href="/student/auth/resume/job">+</Link>
//    </h3>
//  <ul className='list-group'>{student && student.resume.jobs.map((j) =>( <div className='list-group-item' key={j.id}>{JSON.stringify(j)} 

//   <Link className='mx-3 btn btn-sm btn-primary' href={`/student/auth/resume/job/${j.id}`}>edit</Link>
//   <button onClick={()=>deletejobHandler(j.id)} className='btn btn-sm btn-danger'>delete</button>
//  </div>))}</ul>
   

//  <h3> Internships
//     <Link className='mx-3' href="/student/auth/resume/internships">+</Link>
//    </h3>
//  <ul className='list-group'>{student && student.resume.interships.map((i) =>( <div className='list-group-item' key={i.id}>{JSON.stringify(i)} 

//   <Link className='mx-3 btn btn-sm btn-primary' href={`/student/auth/resume/internships/${i.id}`}>edit</Link>
//   <button onClick={()=>deleteinternshipHandler(i.id)} className='btn btn-sm btn-danger'>delete</button>
//  </div>))}</ul>



//  <h3>Responsibility 
//     <Link className='mx-3' href="/student/auth/resume/responsibility">+</Link>
//    </h3>
//  <ul className='list-group'>{student && student.resume.responsibility.map((j) =>( <div className='list-group-item' key={j.id}>{JSON.stringify(j)} 

//   <Link className='mx-3 btn btn-sm btn-primary' href={`/student/auth/resume/responsibility/${j.id}`}>edit</Link>
//   <button onClick={()=>deleteresponsibilityHandler(j.id)} className='btn btn-sm btn-danger'>delete</button>
//  </div>))}</ul>


//  <h3>Courses 
//     <Link className='mx-3' href="/student/auth/resume/courses">+</Link>
//    </h3>
//  <ul className='list-group'>{student && student.resume.courses.map((j) =>( <div className='list-group-item' key={j.id}>{JSON.stringify(j)} 

//   <Link className='mx-3 btn btn-sm btn-primary' href={`/student/auth/resume/courses/${j.id}`}>edit</Link>
//   <button onClick={()=>deletecoursesHandler(j.id)} className='btn btn-sm btn-danger'>delete</button>
//  </div>))}</ul>

//  <h3>Projects 
//     <Link className='mx-3' href="/student/auth/resume/projects">+</Link>
//    </h3>
//  <ul className='list-group'>{student && student.resume.projects.map((j) =>( <div className='list-group-item' key={j.id}>{JSON.stringify(j)} 

//   <Link className='mx-3 btn btn-sm btn-primary' href={`/student/auth/resume/projects/${j.id}`}>edit</Link>
//   <button onClick={()=>deleteprojectHandler(j.id)} className='btn btn-sm btn-danger'>delete</button>
//  </div>))}</ul>


//  <h3>Skills 
//     <Link className='mx-3' href="/student/auth/resume/skills">+</Link>
//    </h3>
//  <ul className='list-group'>{student && student.resume.skills.map((j) =>( <div className='list-group-item' key={j.id}>{JSON.stringify(j)} 

//   <Link className='mx-3 btn btn-sm btn-primary' href={`/student/auth/resume/skills/${j.id}`}>edit</Link>
//   <button onClick={()=>deleteskillHandler(j.id)} className='btn btn-sm btn-danger'>delete</button>
//  </div>))}</ul>

 
//  <h3>Accomplishments 
//     <Link className='mx-3' href="/student/auth/resume/accomplishments">+</Link>
//    </h3>
//  <ul className='list-group'>{student && student.resume.accomplishments.map((j) =>( <div className='list-group-item' key={j.id}>{JSON.stringify(j)} 

//   <Link className='mx-3 btn btn-sm btn-primary' href={`/student/auth/resume/accomplishments/${j.id}`}>edit</Link>
//   <button onClick={()=>deleteaccomplishmentsHandler(j.id)} className='btn btn-sm btn-danger'>delete</button>
//  </div>))}</ul>
//     </div>

export default page