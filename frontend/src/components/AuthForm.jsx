import { Link, Form , useSearchParams } from "react-router-dom"


const AuthForm = () => {

    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get("mode") === "login";

  return (
    <section className="form-section" id="auth-form">
        
            <p>{isLogin ? "Login to your Account" : "Create new Account"}</p>
            <Form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your Email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter your Email" />
                </div>
                <button className="btn login-btn">{isLogin ? "Login" : "Register"}</button>
            </Form>
            { 
                isLogin ? (<p className="create-account">
                    Dont have an Account? <Link to="/auth?mode=register">Create Here!</Link>
                </p>) : (<p className="create-account">
                Already have an account? <Link to="/auth?mode=login">Login Here!</Link>
            </p>) 
            }
       
    </section>
  )
}

export default AuthForm