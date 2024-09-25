import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      {/* <ToastContainer closeButton={false} />
        <DeleteModal show={deleteModal} onDeleteClick={() => handleDeleteTeamData()} onCloseClick={() => setDeleteModal(false)} /> */}
      <div className="page-content">
        {/* <Container fluid>
            <BreadCrumb title="Team" pageTitle="Pages" />
            <Card>
              <CardBody>
                <Row className="g-2">
                  <Col sm={4}>
                    <div className="search-box">
                      <Input
                        type="text"
                        className="form-control"
                        placeholder="Search for name or designation..."
                        onChange={(e) => searchList(e.target.value)}
                      />
                      <i className="ri-search-line search-icon"></i>
                    </div>
                  </Col>
                  <Col className="col-sm-auto ms-auto">
                    <div className="list-grid-nav hstack gap-1">
                      <Button color="info" id="grid-view-button" className="btn btn-soft-info nav-link btn-icon fs-14 active filter-button">
                        <i className="ri-grid-fill"></i>
                      </Button>
                      <Button color="info" id="list-view-button" className="btn btn-soft-info nav-link  btn-icon fs-14 filter-button">
                        <i className="ri-list-unordered"></i>
                      </Button>
                      <Dropdown isOpen={dropdownOpen} toggle={toggledropDown}>
                        <DropdownToggle type="button" className="btn btn-soft-info btn-icon fs-14">
                          <i className="ri-more-2-fill"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <li>
                            <Link className="dropdown-item" to="#">
                              All
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Last Week
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Last Month
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Last Year
                            </Link>
                          </li>
                        </DropdownMenu>
                      </Dropdown>
                      <Button color="success" onClick={() => handleTeamClicks()}>
                        <i className="ri-add-fill me-1 align-bottom"></i> Add Members
                      </Button>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>

            <Row>
              <Col lg={12}>
                <div id="teamlist">
                  <Row className="team-list grid-view-filter">
                    {(teamList || []).map((item, key) => (
                      <Col key={key}>
                        <Card className="team-box">
                          <div className="team-cover">
                            <img src={item.backgroundImg} alt="" className="img-fluid" />
                          </div>
                          <CardBody className="p-4">
                            <Row className="align-items-center team-row">
                              <Col className="team-settings">
                                <Row>
                                  <Col>
                                    <div className="flex-shrink-0 me-2">
                                      <button
                                        type="button"
                                        className="btn btn-light btn-icon rounded-circle btn-sm favourite-btn"
                                        onClick={(e) => favouriteBtn(e.target)}
                                      >
                                        <i className="ri-star-fill fs-14"></i>
                                      </button>
                                    </div>
                                  </Col>
                                  <UncontrolledDropdown direction="start" className="col text-end">
                                    <DropdownToggle tag="a" id="dropdownMenuLink2" role="button">
                                      <i className="ri-more-fill fs-17"></i>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                      <DropdownItem className="dropdown-item edit-list" href="#addmemberModal" onClick={() => handleTeamClick(item)}>
                                        <i className="ri-pencil-line me-2 align-bottom text-muted"></i>Edit
                                      </DropdownItem>
                                      <DropdownItem className="dropdown-item remove-list" href="#removeMemberModal" onClick={() => onClickData(item)}>
                                        <i className="ri-delete-bin-5-line me-2 align-bottom text-muted"></i>Remove
                                      </DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </Row>
                              </Col>
                              <Col lg={4} className="col">
                                <div className="team-profile-img">
                                  <div className="avatar-lg img-thumbnail rounded-circle flex-shrink-0">
                                    {item.userImage != null ? (
                                      <img src={item.userImage} alt="" className="img-fluid d-block rounded-circle" />
                                    ) : (
                                      <div className="avatar-title text-uppercase border rounded-circle bg-light text-primary">
                                        {item.name.charAt(0) + item.name.split(" ").slice(-1).toString().charAt(0)}
                                      </div>
                                    )}
                                  </div>
                                  <div className="team-content">
                                    <Link
                                      to="#"
                                      onClick={() => {
                                        setIsOpen(!isOpen);
                                        setSideBar(item);
                                      }}
                                    >
                                      <h5 className="fs-16 mb-1">{item.name}</h5>
                                    </Link>
                                    <p className="text-muted mb-0">{item.designation}</p>
                                  </div>
                                </div>
                              </Col>
                              <Col lg={4} className="col">
                                <Row className="text-muted text-center">
                                  <Col xs={6} className="border-end border-end-dashed">
                                    <h5 className="mb-1">{item.projectCount}</h5>
                                    <p className="text-muted mb-0">Projects</p>
                                  </Col>
                                  <Col xs={6}>
                                    <h5 className="mb-1">{item.taskCount}</h5>
                                    <p className="text-muted mb-0">Tasks</p>
                                  </Col>
                                </Row>
                              </Col>
                              <Col lg={2} className="col">
                                <div className="text-end">
                                  <Link to="/pages-profile" className="btn btn-light view-btn">
                                    View Profile
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}

                    <Col lg={12}>
                      <div className="text-center mb-3">
                        <Link to="#" className="text-success">
                          <i className="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load More{" "}
                        </Link>
                      </div>
                    </Col>
                  </Row>

                  <div className="modal fade" id="addmembers" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                      <Modal isOpen={modal} toggle={toggle} centered>
                        <ModalBody>
                          <Form
                            onSubmit={(e) => {
                              e.preventDefault();
                              validation.handleSubmit();
                              return false;
                            }}
                          >
                            <Row>
                              <Col lg={12}>
                                <input type="hidden" id="memberid-input" className="form-control" defaultValue="" />
                                <div className="px-1 pt-1">
                                  <div className="modal-team-cover position-relative mb-0 mt-n4 mx-n4 rounded-top overflow-hidden">
                                    <img src={smallImage9} alt="" id="cover-img" className="img-fluid" />

                                    <div className="d-flex position-absolute start-0 end-0 top-0 p-3">
                                      <div className="flex-grow-1">
                                        <h5 className="modal-title text-white" id="createMemberLabel">
                                          {!isEdit ? "Add New Members" : "Edit Member"}
                                        </h5>
                                      </div>
                                      <div className="flex-shrink-0">
                                        <div className="d-flex gap-3 align-items-center">
                                          <div>
                                            <label
                                              htmlFor="cover-image-input"
                                              className="mb-0"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              title="Select Cover Image"
                                            >
                                              <div className="avatar-xs">
                                                <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                  <i className="ri-image-fill"></i>
                                                </div>
                                              </div>
                                            </label>
                                            <input
                                              className="form-control d-none"
                                              defaultValue=""
                                              id="cover-image-input"
                                              type="file"
                                              accept="image/png, image/gif, image/jpeg"
                                            />
                                          </div>
                                          <button
                                            type="button"
                                            className="btn-close btn-close-white"
                                            onClick={() => setModal(false)}
                                            id="createMemberBtn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                          ></button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="text-center mb-4 mt-n5 pt-2">
                                  <div className="position-relative d-inline-block">
                                    <div className="position-absolute bottom-0 end-0">
                                      <label
                                        htmlFor="member-image-input"
                                        className="mb-0"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="right"
                                        title="Select Member Image"
                                      >
                                        <div className="avatar-xs">
                                          <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                            <i className="ri-image-fill"></i>
                                          </div>
                                        </div>
                                      </label>
                                      <input
                                        className="form-control d-none"
                                        defaultValue=""
                                        id="member-image-input"
                                        type="file"
                                        accept="image/png, image/gif, image/jpeg"
                                      />
                                    </div>
                                    <div className="avatar-lg">
                                      <div className="avatar-title bg-light rounded-circle">
                                        <img src={userdummyimg} alt=" " id="member-img" className="avatar-md rounded-circle h-auto" />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="mb-3">
                                  <Label htmlFor="teammembersName" className="form-label">
                                    Name
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="teammembersName"
                                    placeholder="Enter name"
                                    name="name"
                                    validate={{
                                      required: { value: true },
                                    }}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.name || ""}
                                    invalid={validation.touched.name && validation.errors.name ? true : false}
                                  />
                                  {validation.touched.name && validation.errors.name ? (
                                    <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col lg={12}>
                                <div className="mb-3">
                                  <Label htmlFor="designation" className="form-label">
                                    Designation
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="designation"
                                    placeholder="Enter designation"
                                    name="designation"
                                    validate={{
                                      required: { value: true },
                                    }}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.designation || ""}
                                    invalid={validation.touched.designation && validation.errors.designation ? true : false}
                                  />
                                  {validation.touched.designation && validation.errors.designation ? (
                                    <FormFeedback type="invalid">{validation.errors.designation}</FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col lg={12}>
                                <div className="hstack gap-2 justify-content-end">
                                  <button type="button" className="btn btn-light" onClick={() => setModal(false)}>
                                    Close
                                  </button>
                                  <button type="submit" className="btn btn-success" id="addNewMember">
                                    {!isEdit ? "Add Member" : "Save"}
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </ModalBody>
                      </Modal>
                    </div>
                  </div>

                  <Offcanvas
                    isOpen={isOpen}
                    direction="end"
                    toggle={() => setIsOpen(!isOpen)}
                    className="offcanvas-end border-0"
                    tabIndex="-1"
                    id="member-overview"
                  >
                    <OffcanvasBody className="profile-offcanvas p-0">
                      <div className="team-cover">
                        <img src={sideBar.backgroundImg || smallImage9} alt="" className="img-fluid" />
                      </div>
                      <div className="p-3">
                        <div className="team-settings">
                          <Row>
                            <Col>
                              <button type="button" className="btn btn-light btn-icon rounded-circle btn-sm favourite-btn ">
                                {" "}
                                <i className="ri-star-fill fs-14"></i>{" "}
                              </button>
                            </Col>
                            <UncontrolledDropdown direction="start" className="col text-end">
                              <DropdownToggle tag="a" id="dropdownMenuLink14" role="button">
                                <i className="ri-more-fill fs-17"></i>
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>
                                  <i className="ri-star-line me-2 align-middle" />
                                  Favorites
                                </DropdownItem>
                                <DropdownItem>
                                  <i className="ri-delete-bin-5-line me-2 align-middle" />
                                  Delete
                                </DropdownItem>
                              </DropdownMenu>
                            </UncontrolledDropdown>
                          </Row>
                        </div>
                      </div>
                      <div className="p-3 text-center">
                        <img src={sideBar.userImage || avatar2} alt="" className="avatar-lg img-thumbnail rounded-circle mx-auto" />
                        <div className="mt-3">
                          <h5 className="fs-15 profile-name">
                            <Link to="#" className="link-primary">
                              {sideBar.name || "Nancy Martino"}
                            </Link>
                          </h5>
                          <p className="text-muted profile-designation">{sideBar.designation || "Team Leader & HR"}</p>
                        </div>
                        <div className="hstack gap-2 justify-content-center mt-4">
                          <div className="avatar-xs">
                            <Link to="#" className="avatar-title bg-soft-secondary text-secondary rounded fs-16">
                              <i className="ri-facebook-fill"></i>
                            </Link>
                          </div>
                          <div className="avatar-xs">
                            <Link to="#" className="avatar-title bg-soft-success text-success rounded fs-16">
                              <i className="ri-slack-fill"></i>
                            </Link>
                          </div>
                          <div className="avatar-xs">
                            <Link to="#" className="avatar-title bg-soft-info text-info rounded fs-16">
                              <i className="ri-linkedin-fill"></i>
                            </Link>
                          </div>
                          <div className="avatar-xs">
                            <Link to="#" className="avatar-title bg-soft-danger text-danger rounded fs-16">
                              <i className="ri-dribbble-fill"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <Row className="g-0 text-center">
                        <Col xs={6}>
                          <div className="p-3 border border-dashed border-start-0">
                            <h5 className="mb-1 profile-project">{sideBar.projectCount || "124"}</h5>
                            <p className="text-muted mb-0">Projects</p>
                          </div>
                        </Col>
                        <Col xs={6}>
                          <div className="p-3 border border-dashed border-start-0">
                            <h5 className="mb-1 profile-task">{sideBar.taskCount || "81"}</h5>
                            <p className="text-muted mb-0">Tasks</p>
                          </div>
                        </Col>
                      </Row>
                      <div className="p-3">
                        <h5 className="fs-15 mb-3">Personal Details</h5>
                        <div className="mb-3">
                          <p className="text-muted text-uppercase fw-semibold fs-12 mb-2">Number</p>
                          <h6>+(256) 2451 8974</h6>
                        </div>
                        <div className="mb-3">
                          <p className="text-muted text-uppercase fw-semibold fs-12 mb-2">Email</p>
                          <h6>nancymartino@email.com</h6>
                        </div>
                        <div>
                          <p className="text-muted text-uppercase fw-semibold fs-12 mb-2">Location</p>
                          <h6 className="mb-0">Carson City - USA</h6>
                        </div>
                      </div>
                      <div className="p-3 border-top">
                        <h5 className="fs-15 mb-4">File Manager</h5>
                        <div className="d-flex mb-3">
                          <div className="flex-shrink-0 avatar-xs">
                            <div className="avatar-title bg-soft-danger text-danger rounded fs-16">
                              <i className="ri-image-2-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1">
                              <Link to="#">Images</Link>
                            </h6>
                            <p className="text-muted mb-0">4469 Files</p>
                          </div>
                          <div className="text-muted">12 GB</div>
                        </div>
                        <div className="d-flex mb-3">
                          <div className="flex-shrink-0 avatar-xs">
                            <div className="avatar-title bg-soft-secondary text-secondary rounded fs-16">
                              <i className="ri-file-zip-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1">
                              <Link to="#">Documents</Link>
                            </h6>
                            <p className="text-muted mb-0">46 Files</p>
                          </div>
                          <div className="text-muted">3.46 GB</div>
                        </div>
                        <div className="d-flex mb-3">
                          <div className="flex-shrink-0 avatar-xs">
                            <div className="avatar-title bg-soft-success text-success rounded fs-16">
                              <i className="ri-live-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1">
                              <Link to="#">Media</Link>
                            </h6>
                            <p className="text-muted mb-0">124 Files</p>
                          </div>
                          <div className="text-muted">4.3 GB</div>
                        </div>
                        <div className="d-flex">
                          <div className="flex-shrink-0 avatar-xs">
                            <div className="avatar-title bg-soft-primary text-primary rounded fs-16">
                              <i className="ri-error-warning-line"></i>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-1">
                              <Link to="#">Others</Link>
                            </h6>
                            <p className="text-muted mb-0">18 Files</p>
                          </div>
                          <div className="text-muted">846 MB</div>
                        </div>
                      </div>
                    </OffcanvasBody>
                    <div className="offcanvas-foorter border p-3 hstack gap-3 text-center position-relative">
                      <button className="btn btn-light w-100">
                        <i className="ri-question-answer-fill align-bottom ms-1"></i> Send Message
                      </button>
                      <Link to="/pages-profile" className="btn btn-primary w-100">
                        <i className="ri-user-3-fill align-bottom ms-1"></i> View Profile
                      </Link>
                    </div>
                  </Offcanvas>
                </div>
                <div className="py-4 mt-4 text-center" id="noresult" style={{ display: "none" }}>
                  <lord-icon
                    src="https://cdn.lordicon.com/msoeawqm.json"
                    trigger="loop"
                    colors="primary:#405189,secondary:#0ab39c"
                    style={{ width: "72px", height: "72px" }}
                  ></lord-icon>
                  <h5 className="mt-4">Sorry! No Result Found</h5>
                </div>
              </Col>
            </Row>
          </Container> */}
        <h1>hello from home</h1>
      </div>
    </React.Fragment>
  );
};

export default Home;
