import React, { useEffect, useState } from "react";
import UiContent from "../../Components/Common/UiContent";
import { Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import PreviewCardHeader from "../../Components/Common/PreviewCardHeader";
import { Link } from "react-router-dom";
import { ScrollHorizontal } from "../Tables/DataTables/datatableCom";
import ScrollHorizontalTable from "./ScrollHorizontalTable";
import SearchOption from "../../Components/Common/SearchOption";
import { useDispatch, useSelector } from "react-redux";
import { getallUser, getAllUser } from "../../slices/usermanagementSlice/alluserSlice/thunk";
// import { getAllUser } from "../../slices/thunks";
const AllUsers = () => {
  // const dispatch = useDispatch();
  // const users = useSelector((state) => state.allUser);
  // console.log("users----->", users);
  // useEffect(() => {
  //   const session = JSON.parse(sessionStorage.getItem("authUser"));
  //   console.log("session-->", session);
  //   dispatch(getallUser());
  // }, [dispatch]);

  return (
    <React.Fragment>
      <UiContent />
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader className=" gap-5">
                  <div>
                    <h5 className="card-title mb-0">Scroll - Horizontal</h5>
                  </div>
                  <div style={{ width: "40%" }}>
                    <SearchOption />
                  </div>
                </CardHeader>
                <CardBody>
                  <ScrollHorizontalTable style={{ width: "100%" }} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AllUsers;
