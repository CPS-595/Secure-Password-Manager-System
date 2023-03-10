/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
import useAuth from "hooks/useAuth";

// react-router-dom components
import { Link, Navigate, Routes, Route } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
// import Grid from "@mui/material/Grid";
// import MuiLink from "@mui/material/Link";

// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import axios from "api/axios";

const LOGIN_URL = "/auth";
// import { Redirect } from 'react-router';

function Basic() {
  const { setAuth } = useAuth();
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleSignIn = async () => {
    if (email === "") {
      setEmailError("Email Address cannot be empty!");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError("Incorrect Email Address!");
    } else if (password === "") {
      setPasswordError("Password cannot be empty!");
    } else if (password.length < 6) {
      setPasswordError("Password cannot be less than 6 characters!");
    } else if (password.length > 30) {
      setPasswordError("Password cannot be greater than 30 characters!");
    } else {
      console.log("email", email);
      console.log("password", password);
      try {
        const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        console.log(JSON.stringify(response?.data));
        //  console.log(JSON.stringify(response));
        const accessToken = response?.data?.accessToken;
        const user = response?.data?.user;
        setAuth({ user, accessToken });
        if (response?.data?.status === "Success") {
          setLoggedIn(true);
        }
      } catch (err) {
        setEmailError(err.response.data.message);
      }
      //   axios
      //     .post(`http://localhost:8081/auth`, { email, password })
      //     .then((res) => {
      //       console.log(res);
      //       console.log(res.data);
      //       if (res.data.status === "Success") {
      //         setLoggedIn(true);
      //       }
      //     })
      //     .catch((err) => {
      //       setEmailError(err.response.data.message);
      //     });
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      setEmailError("");
    }
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  if (loggedIn) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/credentials" />} />
      </Routes>
    );
  }

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                fullWidth
                value={email}
                onChange={handleEmail}
                error={emailError}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                fullWidth
                value={password}
                onChange={handlePassword}
                error={passwordError}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            {emailError !== "" && (
              <MDBox mb={2}>
                <MDTypography variant="button" color="error">
                  {emailError}
                </MDTypography>
              </MDBox>
            )}
            {passwordError !== "" && (
              <MDBox mb={2}>
                <MDTypography variant="button" color="error">
                  {passwordError}
                </MDTypography>
              </MDBox>
            )}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSignIn}>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
