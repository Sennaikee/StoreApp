import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const LogIn = () => {
  const navigate = useNavigate(); 
   
  const handleSubmit = async () => {
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
        alert("logged in");
        navigate("/");
      })
      .catch((err) => {
        alert("Failed to login");
      });

    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
  };
  return (
    <>
      <div className="loginpage">
        <h2>Welcome Back</h2>
        {/* <img style={{ "margin-left": "80px" }} src={people} alt="" /> */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="email"
              placeholder="Enter your email here"
              id="email"
            />
            <br />
            <input type="password" placeholder="Enter password" id="password" />
            <br />
            <button className="autbtn" type="submit">
              Sign In
            </button>
          </div>
        </form>
        <p>
          Dont have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </>
  );
};
export default LogIn;
