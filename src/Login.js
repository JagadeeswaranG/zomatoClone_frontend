import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./api/users";
import { config } from "./config";

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validate:(values)=>{
      let errors={}
      if(!values.email){
        errors.email="Required"
      }
      if(!values.password){
        errors.password="Required"
      }
      return errors;

    },
    onSubmit:async(values)=>{
      try {
        let loginReq = await login(values)
        // console.log(loginReq.data.token);
        localStorage.setItem(`${config.storage_key}`,loginReq.data.token)
        navigate("/portal/list-restarunts")
      } catch (error) {
        // alert("Something went wrong")
        console.log(error);
        alert(error.response.data.message)
      }      
    }
  });
  return (
    <body class="bg-gradient-primary">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-12 col-md-9">
            <div class="card o-hidden border-0 shadow-lg my-5">
              <div class="card-body p-0">
                <div class="row">
                  <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div class="col-lg-6">
                    <div class="p-5">
                      <div class="text-center">
                        <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form class="user" onSubmit={formik.handleSubmit}>
                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            class="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                          {
                          formik.touched.email && formik.errors.email ? <span style={{color:"red"}}>{formik.errors.email}</span>:null
                        }
                        </div>                        
                        <div class="form-group">
                          <input
                            type="password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            class="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                          {
                          formik.touched.password && formik.errors.password ? <span style={{color:"red"}}>{formik.errors.password}</span>:null
                        }
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              class="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <input
                          type={"submit"}
                          value={"Login"}
                          class="btn btn-primary btn-user btn-block"
                        />
                          Login
                        
                        <hr />
                        <a
                          href="index.html"
                          class="btn btn-google btn-user btn-block"
                        >
                          <i class="fab fa-google fa-fw"></i> Login with Google
                        </a>
                        <a
                          href="index.html"
                          class="btn btn-facebook btn-user btn-block"
                        >
                          <i class="fab fa-facebook-f fa-fw"></i> Login with
                          Facebook
                        </a>
                      </form>
                      <hr />
                      <div class="text-center">
                        <a class="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div class="text-center">
                        <a class="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
