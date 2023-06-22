// import React from 'react'
  
//   export default function LoginForm() {
//     const [input, setInput] = useState(initialInput);
//     const [error, setError] = useState({});
//     const { token, setToken } = useAuth();
//     const navigate = useNavigate();
//     // console.log('token', token);
  
//     const handleChangeInput = (e) => {
//       setInput({ ...input, [e.target.name]: e.target.value });
//     };
  
//     const handleSubmitForm = (onSubmit) => async (e) => {
//       e.preventDefault();
  
//       const result = validateLogin(input);
//       // console.log(result);
//       if (result) {
//         return setError(result);
//       }
//       setError({});
//       await onSubmit(input);
//       setInput(initialInput);
//     };
  
//     const onSubmit = async (value) => {
//       try {
//         const result = await login(value);
//         setAccessToken(result.accessToken);
//         setToken(result.accessToken);
//         if (result.accessToken) {
//           navigate('/patient/getallpatient');
//           toast.success('Login success!!')
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };
      
//   return (
//     <div>TestPage</div>
//   )
// }
