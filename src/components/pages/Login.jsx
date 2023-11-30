// import React, { useRef } from 'react'

// export default function Login() {

//     const email = useRef()
//     const password = useRef()

//   return (
//     <div className='container-fluid'>
//         <form onSubmit={handlesubmit} className='mt-5 pt-5'>
//         <div className='mb-3'>
//             <label className='fw-bold' htmlFor="email">Email :</label>
//             <input ref={email} type="text" id='email' className='form-control' required />
//         </div>
//         <div className='mb-3'>
//             <label className='fw-bold' htmlFor="password">Passwoord :</label>
//             <input ref={password} type="text" id='password' className='form-control' required/>
//         </div>
//         <button className='btn btn-primary'>Login</button>
//     </form>
//     </div>
//   )
//   function handlesubmit(e){
//     e.preventDefault()
//     console.log('email :', email.current.value)
//     console.log('password :', password.current.value)

//   }
// }
