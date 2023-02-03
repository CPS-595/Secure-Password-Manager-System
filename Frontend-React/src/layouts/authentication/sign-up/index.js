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

// react-router-dom components
import { Link, Navigate, Routes, Route } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

import axios from "axios";

function Cover() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [number, setNumber] = useState("");
  const [numberError, setNumberError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [terms, setTerms] = useState(false);
  const [termsError, setTermsError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const clearErrors = () => {
    setTermsError("");
    setNameError("");
    setNumberError("");
    setPasswordError("");
    setEmailError("");
  };

  const handleTerms = () => {
    setTerms(!terms);
    clearErrors();
  };

  const handleSignUp = () => {
    if (name === "") {
      setNameError("Name cannot empty!");
    } else if (email === "") {
      setEmailError("Email Address cannot be empty!");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError("Incorrect Email Address!");
    } else if (number === "") {
      setNumberError("Number cannot be empty!");
    } else if (!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/i.test(number)) {
      setNumberError("Incorrect Phone Number!");
    } else if (password === "") {
      setPasswordError("Password cannot be empty!");
    } else if (password.length < 6) {
      setPasswordError("Password cannot be less than 6 characters!");
    } else if (password.length > 30) {
      setPasswordError("Password cannot be greater than 30 characters!");
    } else if (!terms) {
      setTermsError("Please agree to the terms and conditions!");
    } else {
      axios.post(`http://localhost:8081/signup`, { email, password, name, number }).then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.status === "registeration-failed") {
          setEmailError(res.data.message);
        } else {
          setLoggedIn(true);
        }
      });
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (event.target.value !== "") {
      clearErrors();
    }
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      clearErrors();
    }
  };

  const handleName = (event) => {
    setName(event.target.value);
    if (event.target.value !== "") {
      clearErrors();
    }
  };

  const handleNumber = (event) => {
    setNumber(event.target.value);
    if (event.target.value !== "") {
      clearErrors();
    }
  };

  if (loggedIn) {
    return (
      <Routes>
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    );
  }

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Name"
                variant="standard"
                fullWidth
                value={name}
                onChange={handleName}
                error={nameError}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                value={email}
                onChange={handleEmail}
                error={emailError}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Number"
                variant="standard"
                fullWidth
                value={number}
                onChange={handleNumber}
                error={numberError}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                variant="standard"
                fullWidth
                value={password}
                onChange={handlePassword}
                error={passwordError}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox checked={terms} onClick={handleTerms} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree to the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            {nameError !== "" && (
              <MDBox mb={2}>
                <MDTypography variant="button" color="error">
                  {nameError}
                </MDTypography>
              </MDBox>
            )}
            {emailError !== "" && (
              <MDBox mb={2}>
                <MDTypography variant="button" color="error">
                  {emailError}
                </MDTypography>
              </MDBox>
            )}
            {numberError !== "" && (
              <MDBox mb={2}>
                <MDTypography variant="button" color="error">
                  {numberError}
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
            {termsError !== "" && (
              <MDBox mb={2}>
                <MDTypography variant="button" color="error">
                  {termsError}
                </MDTypography>
              </MDBox>
            )}
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={handleSignUp}>
                sign up
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
