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
  // const [error, setError] = useState("");
  const handleName = (event) => {
    setResourceName(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleUrl = (event) => {
    setUrl(event.target.value);
  };

  return (
    <Modal visible={showModal} effect="fadeInUp" width="60%" height="80%">
      <MDBox component="form" role="form" style={{ margin: "30px" }}>
        <MDTypography variant="h4">Create a Password</MDTypography>
        <br />
        <MDBox mb={2}>
          <MDInput
            type="text"
            label="Name"
            fullWidth
            value={resourceName}
            onChange={handleName}
            // error={error}
          />
        </MDBox>
        <MDBox mb={2}>
          <MDInput
            type="text"
            label="URL"
            fullWidth
            value={url}
            onChange={handleUrl}
            // error={error}
          />
        </MDBox>
        <MDBox mb={2}>
          <MDInput
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={handlePassword}
            // error={error}
          />
        </MDBox>
        <br />
        <MDBox width="100%" display="flex">
          <MDButton variant="gradient" color="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </MDButton>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <MDButton variant="gradient" color="info" onClick={() => setShowModal(false)}>
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
