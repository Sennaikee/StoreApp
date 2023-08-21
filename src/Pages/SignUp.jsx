import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = ()=> {
    const navigate = useNavigate()
    const handleSubmit = () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            alert("Failed to sign up")
          });
          navigate("/login")
    };
    return (
      <>
        <div className="signuppage">
          <h2>Welcome Onboard!</h2>
          <p style={{ fontSize: "20px" }}>Let's get shopping</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-control">
              {/* <label>Username</label>
          <input type="text" name='username' id='username' placeholder="Enter your username" onChange={(e) => handleInput(e)}/> */}

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email here"
              />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
              />
              <button className="autbtn">Sign Up</button>
            </div>
          </form>
          <p>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </>
    );
}

export default SignUp