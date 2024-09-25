import React, { useEffect, useState } from "react";
import UiContent from "../../Components/Common/UiContent";
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Label, Row, Spinner, Table } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import PreviewCardHeader from "../../Components/Common/PreviewCardHeader";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSubcription, getAllSubcriptions } from "../../slices/subscriptions/allSubscriptions/thunk";
import ScrollHorizontalTable from "./ScrollHorizontalTable";
import SearchOption from "../../Components/Common/SearchOption";
import AddSubscriptionModal from "./AddSubscriptionModal";
import Loader from "../../Components/Common/Loader";
const AllSubscriptions = () => {
  const [open, setOpen] = useState(false);
  const allSubscription = useSelector((state) => state);
  const allData = allSubscription.AllSubscription.allSubscription.data;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSubcriptions());
  }, [dispatch]);

  const openSubscriptionModal = () => {
    setOpen(!open);
  };

  const handleAddsubscription = (formData) => {
    setLoading(true);
    dispatch(createSubcription(formData))
      .then(() => {
        dispatch(getAllSubcriptions());
      })
      .then(() => {
        setLoading(false);
      });
  };

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
                    <h5 className="card-title mb-0">All Subscriptions</h5>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: "40%" }}>
                      <SearchOption />
                    </div>
                    <div>
                      <button onClick={openSubscriptionModal} className="btn btn-primary">
                        + Add Subscription
                      </button>
                      {/* <Button onClick={openSubscriptionModal} className="btn btn-primary">
                        + Add Subscription
                      </Button> */}
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  {loading ? (
                    // <Spinner size="sm" className="flex-shrink-0">
                    //   Loading...
                    // </Spinner>
                    <Loader />
                  ) : (
                    allData?.length > 0 && <ScrollHorizontalTable allData={allData} style={{ width: "100%" }} />
                  )}

                  {/* <div className="live-preview">
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
                              {allData?.map((item) => {
                                return (
                                  <tr>
                                    <th scope="row">
                                      <div className="form-check">
                                        <Input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option1" defaultChecked />
                                      </div>
                                    </th>
                                    <td>{item?.sub_id}</td>
                                    <td>{item?.sub_name}</td>
                                    <td>{item?.plan_link}</td>
                                    <td>{item?.sub_logo}</td>
                                    <td>{item?.plan_link}</td>
                                    <td>{item?.show_in_dropdown}</td>
                                    <td>{item?.active}</td>
                                    <td>{item?.show_in_dropdown}</td>
                                    <td>
                                      <Link to="#">
                                        <i className="ri-download-2-line fs-17 lh-1 align-middle"></i>
                                      </Link>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
                        </div>
                      </Col>
                    </Row>
                  </div> */}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <AddSubscriptionModal setOpen={setOpen} open={open} handleAddsubscription={handleAddsubscription} />
      </div>
    </React.Fragment>
  );
};

export default AllSubscriptions;
