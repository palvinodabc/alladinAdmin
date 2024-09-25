import React from "react";
import UiContent from "../../Components/Common/UiContent";
import { Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Table } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import PreviewCardHeader from "../../Components/Common/PreviewCardHeader";
import { Link } from "react-router-dom";
import SearchOption from "../../Components/Common/SearchOption";
import ScrollHorizontalTable from "./ScrollHorizontalTable";
const AllUserSubscriptions = () => {
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

export default AllUserSubscriptions;
