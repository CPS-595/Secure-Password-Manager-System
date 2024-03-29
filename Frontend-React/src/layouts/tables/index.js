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
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import MDInput from "components/MDInput";
import Modal from "react-awesome-modal";
import MDButton from "components/MDButton";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";

function Tables() {
  const axiosPrivate = useAxiosPrivate();
  const [columns, setColumns] = useState([]);
  const [datas, setDatas] = useState([]);
  const [rows, setRows] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const showPassword = (index) => {
    setShowModal(true);
    const rws = [];
    const payload = datas;
    for (let i = 0; i < payload.length; i += 1) {
      //   if (i === index) {
      //     rws[i] = {
      //       resource: <MDTypography variant="caption">{payload[i].name}</MDTypography>,
      //       password: (
      //         <MDTypography variant="caption">
      //           {payload[i].password}
      //           <Icon
      //             style={{
      //               verticalAlign: "inherit",
      //               fontSize: "18px",
      //               marginLeft: "10px",
      //               cursor: "pointer",
      //             }}
      //             onClick={() => showPassword(i)}
      //           >
      //             visibility
      //           </Icon>
      //         </MDTypography>
      //       ),
      //       created: (
      //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //           {payload[i].dateTime}
      //         </MDTypography>
      //       ),
      //       action: (
      //         <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
      //           Edit
      //         </MDTypography>
      //       ),
      //     };
      //   }
      rws.push({
        resource: <MDTypography variant="caption">{payload[i].name}</MDTypography>,
        password:
          i === index ? (
            <MDTypography variant="caption">
              {payload[i].password}
              <Icon
                style={{
                  verticalAlign: "inherit",
                  fontSize: "18px",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={() => showPassword(i)}
              >
                visibility
              </Icon>
            </MDTypography>
          ) : (
            <MDTypography variant="caption">
              ****
              <Icon
                style={{
                  verticalAlign: "inherit",
                  fontSize: "18px",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                onClick={() => showPassword(i)}
              >
                visibility
              </Icon>
            </MDTypography>
          ),
        created: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {payload[i].dateTime}
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      });
    }
    setRows(rws);
  };
  const prepareData = (dataGot) => {
    setDatas(dataGot);
    const cols = [
      { Header: "Resource", accessor: "resource", width: "30%", align: "left" },
      { Header: "Password", accessor: "password", align: "center" },
      { Header: "Created", accessor: "created", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ];
    const rws = [];
    const data = [];
    for (let i = 0; i < dataGot.length; i += 1) {
      data.push({
        name: dataGot[i].name,
        password: "*****",
        createdBy: dataGot[i].createdBy,
        url: dataGot[i].url,
      });
    }
    for (let i = 0; i < dataGot.length; i += 1) {
      rws.push({
        resource: <MDTypography variant="caption">{dataGot[i].name}</MDTypography>,
        password: (
          <MDTypography variant="caption">
            ****
            <Icon
              style={{
                verticalAlign: "inherit",
                fontSize: "18px",
                marginLeft: "10px",
                cursor: "pointer",
              }}
              onClick={() => showPassword(i)}
            >
              visibility
            </Icon>
          </MDTypography>
        ),
        created: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            {dataGot[i].dateTime}
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      });
    }
    setColumns(cols);
    setRows(rws);
  };

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const navigate = useNavigate();
    const location = useLocation();
    const getResources = async () => {
      try {
        const response = await axiosPrivate.get("/resources", {
          signal: controller.signal,
        });
        if (isMounted) {
          setDatas(response.data.payload);
          prepareData(response.data.payload);
        }
      } catch (err) {
        console.error(err);
        navigate("/authentication/sign-in", { state: { from: location }, replace: true });
      }
    };
    getResources();

    return () => {
      isMounted = false;
      controller.abort();
    };
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
            <Modal visible={showModal} width="400" height="300" effect="fadeInUp">
              <MDBox component="form" role="form" style={{ margin: "30px" }}>
                <MDBox mb={2}>
                  <MDInput type="password" label="Password" fullWidth />
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton
                    variant="gradient"
                    color="info"
                    fullWidth
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </MDButton>
                </MDBox>
              </MDBox>
            </Modal>
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
              >
                <MDTypography variant="h6" color="white">
                  Stored Passwords
                </MDTypography>
              </MDBox>
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

export default Tables;
