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
// // import { useNavigate, useLocation } from "react-router-dom";
// import useAxiosPrivate from "hooks/useAxiosPrivate";
// // @mui material components
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";

// // Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// // Material Dashboard 2 React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import DataTable from "examples/Tables/DataTable";
// import Icon from "@mui/material/Icon";
// // import IconButton from "@mui/material/IconButton";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
import Modal from "react-awesome-modal";
import PropTypes from "prop-types";

function NewResource({ showModal, setShowModal }) {
  const [resourceName, setResourceName] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");
  const [userName, setUserName] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const reset = () => {
    setShowModal(false);
    setResourceName("");
    setUrl("");
    setPassword("");
    setUserName("");
    document.getElementById("error").innerHTML = "";
  };
  const handleName = (event) => {
    setResourceName(event.target.value);
    if (event.target.value !== "") {
      setNameError("");
      document.getElementById("error").innerHTML = "";
    }
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
      document.getElementById("error").innerHTML = "";
    }
  };
  const handleUrl = (event) => {
    setUrl(event.target.value);
    if (event.target.value !== "") {
      setUrlError("");
      document.getElementById("error").innerHTML = "";
    }
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
    if (event.target.value !== "") {
      setUserNameError("");
      document.getElementById("error").innerHTML = "";
    }
  };

  return (
    <Modal visible={showModal} effect="fadeInUp" width="60%" height="60%">
      <MDBox component="form" role="form" style={{ margin: "30px" }}>
        <MDTypography variant="h4">Create a Password</MDTypography>
        <br />
        <MDBox mb={2}>
          <MDInput
            id="name"
            type="text"
            label="Name"
            fullWidth
            value={resourceName}
            onChange={handleName}
            error={nameError}
          />
        </MDBox>
        <MDBox mb={2}>
          <MDInput
            id="url"
            type="text"
            label="URL"
            fullWidth
            value={url}
            onChange={handleUrl}
            error={urlError}
          />
        </MDBox>
        <MDBox mb={2}>
          <MDInput
            id="username"
            type="text"
            label="Username / Email Address"
            fullWidth
            value={userName}
            onChange={handleUserName}
            error={userNameError}
          />
        </MDBox>
        <MDBox mb={2}>
          <MDInput
            id="password"
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={handlePassword}
            error={passwordError}
          />
        </MDBox>
        <MDBox mb={2}>
          <MDTypography
            color="error"
            id="error"
            variant="button"
            style={{ display: "none" }}
            fontWeight="medium"
          >
            Error
          </MDTypography>
        </MDBox>
        <br />
        <MDBox width="100%" display="flex">
          <MDButton variant="gradient" color="secondary" onClick={reset}>
            Cancel
          </MDButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <MDButton id="create" variant="gradient" color="info">
            Create
          </MDButton>
        </MDBox>
      </MDBox>
    </Modal>
  );
}

NewResource.defaultProps = {
  showModal: false,
  setShowModal: null,
};

// Typechecking props for the Header
NewResource.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
};

export default NewResource;
