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
import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "hooks/useAxiosPrivate";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import Icon from "@mui/material/Icon";
// import IconButton from "@mui/material/IconButton";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";
import NewResource from "./NewResource";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";

function Resources() {
  const axiosPrivate = useAxiosPrivate();
  const [successSB, setSuccessSB] = useState(false);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [createModal, setCreateModal] = useState(false);
  const [seePassword, setSeePassword] = useState(false);
  const seePasswordReff = useRef(seePassword);

  const showPassword = (password, id) => {
    console.log("seePassword", seePasswordReff.current);
    if (!seePasswordReff.current) {
      document.dispatchEvent(new CustomEvent("decryptpassword", { detail: { password, id } }));
    } else {
      const encryptedPass = document.getElementById(`password-${id}`);
      encryptedPass.innerHTML = "*********";
    }
    seePasswordReff.current = !seePasswordReff.current;
    setSeePassword(!seePassword);
  };

  const prepareData = (dataGot) => {
    const cols = [
      { Header: "Name", accessor: "name", width: "20%", align: "left" },
      { Header: "URL", accessor: "url", align: "left" },
      { Header: "Username", accessor: "username", align: "left" },
      { Header: "Password", accessor: "password", align: "left" },
      { Header: "Action", accessor: "action", align: "left" },
    ];
    const rws = [];
    for (let i = 0; i < dataGot.length; i += 1) {
      rws.push({
        name: <MDTypography variant="caption">{dataGot[i].name}</MDTypography>,
        url: <MDTypography variant="caption">{dataGot[i].url}</MDTypography>,
        username: <MDTypography variant="caption">{dataGot[i].username}</MDTypography>,
        password: (
          <MDTypography variant="caption">
            <div id={`password-${dataGot[i].id}`} style={{ display: "inline" }}>
              *********
            </div>
            <Icon
              id={`icon-${dataGot[i].id}`}
              style={{
                verticalAlign: "inherit",
                fontSize: "18px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              onClick={() => showPassword(dataGot[i].password, dataGot[i].id)}
            >
              visibility-off
            </Icon>
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      });
    }
    console.log("rws", rws);
    setColumns(cols);
    setRows(rws);
  };

  const getResources = async () => {
    try {
      const response = await axiosPrivate.get("/resources");
      console.log(response.data);
      prepareData(response.data.payload);
    } catch (err) {
      console.error(err);
      // navigate("/authentication/sign-in", { state: { from: location }, replace: true });
    }
  };

  const openSuccessSB = () => {
    getResources();
    setSuccessSB(true);
  };

  const closeSuccessSB = () => setSuccessSB(false);

  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Credential Created Successfully"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  const toggleCreateModal = () => {
    setCreateModal(false);
  };

  useEffect(() => {
    getResources();
  }, []);

  // useEffect(() => {
  //   console.log("useEffectCalled");
  //   axios
  //     .get("http://localhost:8081/resources")
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data.status === "Success") {
  //         // setPayload(res.data.payload);
  //         prepareData(res.data.payload);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       // setEmailError(err.response.data.message);
  //     });
  // }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <MDTypography variant="h6" color="white">
                  Credentials
                </MDTypography>
                <MDButton
                  id="create-new"
                  variant="outlined"
                  size="medium"
                  color="white"
                  onClick={() => setCreateModal(true)}
                >
                  <Icon>add</Icon>&nbsp;&nbsp;&nbsp;Create New
                </MDButton>
              </MDBox>
              <NewResource
                showModal={createModal}
                setShowModal={toggleCreateModal}
                openSuccessSB={openSuccessSB}
              />
              {renderSuccessSB}
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Resources;
