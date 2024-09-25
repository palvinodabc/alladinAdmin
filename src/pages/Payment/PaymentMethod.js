import React from "react";
import { Card, CardBody, Col, Container, Input, Label, Row, Table } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import PreviewCardHeader from "../../Components/Common/PreviewCardHeader";
import { Link } from "react-router-dom";
import UiContent from "../../Components/Common/UiContent";
// import UiContent from "../../Components/Common/UiContent";
const PaymentMethod = () => {
  return (
    <React.Fragment>
      <UiContent />
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="live-preview">
                    <Row>
                      <Col xl={100}>
                        <div className="table-responsive">
                          <Table className="table-hover align-middle table-nowrap mb-0">
                            <thead>
                              <tr>
                                <th scope="col" style={{ width: "25px" }}>
                                  <div className="form-check">
                                    <Input className="form-check-input" type="checkbox" id="checkAll" defaultValue="option1" />
                                  </div>
                                </th>
                                <th scope="col">uid</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Api_key</th>
                                <th scope="col">Active</th>
                                <th scope="col">Creted_at</th>
                                <th scope="col">Updated_at</th>
                                <th scope="col">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">
                                  <div className="form-check">
                                    <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" defaultChecked />
                                  </div>
                                </th>
                                <td>#541254265</td>
                                <td>Amezon</td>
                                <td>Cleo Carson</td>
                                <td>$4,521</td>
                                <td>$4,521</td>
                                <td>$4,521</td>
                                <td>$4,521</td>
                                <td>Cleo Carson</td>
                                <td>
                                  {/* <Link to="#">
                                    <i className="ri-download-2-line fs-17 lh-1 align-middle"></i>
                                  </Link> */}
                                </td>
                              </tr>
                              {/* <tr>
                                <th scope="row">
                                  <div className="form-check">
                                    <Input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue="option1" defaultChecked />
                                  </div>
                                </th>
                                <td>#744145235</td>
                                <td>Shoppers</td>
                                <td>Juston Eichmann</td>
                                <td>$7,546</td>
                                <td>
                                  <Link to="#">
                                    <i className="ri-download-2-line fs-17 lh-1 align-middle"></i>
                                  </Link>
                                </td>
                              </tr> */}
                              {/* <tr>
                                <th scope="row">
                                  <div className="form-check">
                                    <Input className="form-check-input" type="checkbox" id="inlineCheckbox4" defaultValue="option1" />
                                  </div>
                                </th>
                                <td>#9855126598</td>
                                <td>Flipkart</td>
                                <td>Bettie Johson</td>
                                <td>$1,350</td>
                                <td>
                                  <Link to="#">
                                    <i className="ri-download-2-line fs-17 lh-1 align-middle"></i>
                                  </Link>
                                </td>
                              </tr> */}
                              {/* <tr>
                                <th scope="row">
                                  <div className="form-check">
                                    <Input className="form-check-input" type="checkbox" id="inlineCheckbox5" defaultValue="option1" />
                                  </div>
                                </th>
                                <td>#847512653</td>
                                <td>Shoppers</td>
                                <td>Maritza Blanda</td>
                                <td>$4,521</td>
                                <td>
                                  <Link to="#">
                                    <i className="ri-download-2-line fs-17 lh-1 align-middle"></i>
                                  </Link>
                                </td>
                              </tr> */}
                            </tbody>
                          </Table>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PaymentMethod;
