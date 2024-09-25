import React, { useEffect, useState } from "react";
import { Button, Input, Label, Modal, ModalBody, ModalHeader, Spinner } from "reactstrap";
import { handleSpaceKeyPress } from "../../Components/Common/spacePrevent";
import { useDispatch, useSelector } from "react-redux";
import { createSubcription, updateSubcription } from "../../slices/subscriptions/allSubscriptions/thunk";
import { getCategorySubcription } from "../../slices/subscriptions/subscriptionCategory/thunk";
import Select from "react-select";
import { multiSelectStyle } from "../../helpers/constant";

import styles from "./AddSubscriptionModal.module.scss";
const AddSubscriptionModal = ({
  open,
  setOpen,
  oneSubcriptionData,
  setOneSubcriptionData,
  handleAddsubscription,
  handleUpDatesubscription,
  formKey,
}) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ sub_name: "", categoryId: [], plan_link: "", sub_description: "" });
  const [imgfile, setImgfile] = useState();
  const [errors, setErrors] = useState([]);
  const [loader, setLoader] = useState(false);

  const allSubscription = useSelector((state) => state);
  const allCategory = allSubscription.SubscriptionCategory.allSubscriptionCategory.payload;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgfile({
          ...imgfile,
          [event?.target?.name]: reader.result,
          [`${event?.target?.name}File`]: file,
        });
        const error = setErrors(event?.target?.name, reader.result);
        setErrors({
          ...errors,
          [event?.target?.name]: error,
        });
      };
      reader.readAsDataURL(file);
    }
    event.target.value = "";
  };

  const handleImageDelete = (name) => {
    setImgfile({
      ...imgfile,
      [name]: "",
      [`${event?.target?.name}File`]: "",
    });

    const error = setErrors(name, "");
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  useEffect(() => {
    if (oneSubcriptionData) {
      setFormData({
        sub_name: oneSubcriptionData?.sub_name || "",
        categoryId: oneSubcriptionData?.categories || "",
        plan_link: oneSubcriptionData?.plan_link || "",
        sub_description: oneSubcriptionData?.sub_description || "",
      });
      setImgfile({ sub_logo: oneSubcriptionData?.sub_logo || "" });
    }
  }, [oneSubcriptionData, formKey]);

  useEffect(() => {
    if (open) {
      dispatch(getCategorySubcription());
    }
  }, [open]);

  const formSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    const validationData = formValidation();
    if (validationData) {
      const fieldData = new FormData();

      fieldData.append("sub_name", formData.sub_name);
      formData.categoryId?.map((id) => {
        fieldData.append("categoryId", id);
      });
      fieldData.append("plan_link", formData.plan_link);
      fieldData.append("sub_description", formData.sub_description);
      fieldData.append("image", imgfile.sub_logoFile || formData.sub_logo);

      const dataaa = { formData: fieldData, id: oneSubcriptionData?.sub_id };
      oneSubcriptionData ? handleUpDatesubscription(dataaa) : handleAddsubscription(fieldData);
      setFormData({ sub_name: "", categoryId: "", plan_link: "", sub_description: "" });
      setImgfile();
      setLoader(false);
      // setOneSubcriptionData({});
      setOpen(false);
    }
  };
  const formValidation = () => {
    let errorVal = {};
    let validation = true;

    const regex = new RegExp(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/);

    if (!formData?.sub_name || formData.sub_name.trim() === "") {
      errorVal.sub_name = "Please enter subscription name.";
      validation = false;
    }

    if (formData?.categoryId.length <= 0) {
      errorVal.categoryId = "Please select category.";
      validation = false;
    }
    if (!formData?.plan_link || formData.plan_link.trim() === "") {
      errorVal.plan_link = "Please enter link.";
      validation = false;
    } else if (!regex.test(formData?.plan_link)) {
      errorVal.plan_link = "Please enter valid link";
      validation = false;
    }

    if (!formData?.sub_description || formData.sub_description.trim() === "") {
      errorVal.sub_description = "Please enter description";
      validation = false;
    }

    if (!imgfile?.sub_logo || imgfile.sub_logo.trim() === "") {
      errorVal.sub_logo = "Please upload an image.";
      validation = false;
    }
    // sub_logo;
    setErrors(errorVal);
    return validation;
  };

  return (
    <Modal isOpen={open} centered id="exampleModal">
      <ModalHeader
        toggle={() => {
          setOpen(false);
          setFormData({ sub_name: "", categoryId: [], plan_link: "", sub_description: "", sub_logo: "" });
          setErrors({});
          // setOneSubcriptionData({});
        }}
      >
        {oneSubcriptionData ? "Update Subscription" : "Add Subscription"}
      </ModalHeader>
      <ModalBody>
        <form>
          <h5 className="fs-14 mb-4">
            Subscription Logo <span className="text-danger">*</span>
            {errors?.sub_logo && (
              <span
                className="text-danger"
                style={{
                  fontSize: "12px",
                }}
              >
                {errors?.sub_logo}
              </span>
            )}
          </h5>
          <div className="text-left">
            <div className="position-relative d-inline-block">
              <div className="position-absolute top-100 start-100 translate-middle">
                {!imgfile?.sub_logo ? (
                  <label
                    htmlFor="tool-website-image-input"
                    className="mb-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title=""
                    data-bs-original-title="Select Image"
                  >
                    <div className="avatar-xs">
                      <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                        <i className="ri-image-fill"></i>
                      </div>
                    </div>
                  </label>
                ) : (
                  <div className="avatar-xs" onClick={() => handleImageDelete("sub_logo")}>
                    <div className="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                      <i className="ri-delete-bin-6-line"></i>
                    </div>
                  </div>
                )}
                <input
                  className="form-control d-none"
                  defaultValue=""
                  id="tool-website-image-input"
                  type="file"
                  name="sub_logo"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={(e) => handleImageChange(e)}
                />
              </div>
              <div className="avatar-lg" style={{ width: "100px", height: "100px" }}>
                <div className="avatar-title bg-light rounded">
                  {imgfile ? (
                    <img src={imgfile?.sub_logo} id="tool-website-img" alt="" className="avatar-md h-100 w-100 rounded" />
                  ) : (
                    <img src={formData?.sub_logo} id="tool-website-img" alt="" className="avatar-md h-100 w-100 rounded" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="customer-name" className="col-form-label">
              Subscription Name: <span className="text-danger">* {errors?.sub_name && <span className="text-danger">{errors?.sub_name}</span>}</span>
            </label>

            <Input
              type="text"
              className="form-control"
              id="customer-name"
              name="sub_name"
              placeholder="Enter subscription name"
              value={formData?.sub_name}
              onChange={handleOnChange}
              onKeyDown={handleSpaceKeyPress}
            />
          </div>
          <div className={styles.SubscriptionCategoryalignment}>
            <Label className="form-label" htmlFor="category">
              Subscription Category <span className="text-danger">*</span>{" "}
              {errors?.categoryId && (
                <span className="text-danger" style={{ fontSize: "12px" }}>
                  {errors?.categoryId}
                </span>
              )}
            </Label>
            {/* <Select
              id="category"
              value={
                formData?.categoryId.length > 0
                  ? allCategory &&
                    allCategory
                      .filter((item) => formData?.categoryId.includes(item.name))
                      .map((item) => ({
                        value: item.id,
                        label: item.name,
                      }))
                  : []
              }
              isMulti
              onChange={(selectedOptions) => {
                setFormData({
                  ...formData,
                  categoryId: selectedOptions ? selectedOptions.map((option) => option.value) : [],
                });
                setErrors({
                  ...errors,
                  categoryId: selectedOptions?.length ? "" : "Category is required",
                });
              }}
              placeholder="Select category"
              options={
                allCategory &&
                allCategory?.map((item) => ({
                  value: item.id,
                  label: item.name,
                }))
              }
              styles={multiSelectStyle} // Assuming `multiSelectStyle` is defined elsewhere
            /> */}

            <Select
              id="category"
              value={
                formData?.categoryId.length > 0
                  ? allCategory
                      ?.filter((item) => formData?.categoryId.includes(item.name) || formData?.categoryId.includes(item.id))
                      .map((item) => ({
                        value: item.id,
                        label: item.name,
                      }))
                  : []
              }
              isMulti
              onChange={(selectedOptions) => {
                const selectedIds = selectedOptions ? selectedOptions.map((option) => option.value) : [];
                setFormData({
                  ...formData,
                  categoryId: selectedIds,
                });
                setErrors({
                  ...errors,
                  categoryId: selectedIds.length ? "" : "Category is required",
                });
              }}
              placeholder="Select category"
              options={allCategory?.map((item) => ({
                value: item.id,
                label: item.name,
              }))}
              styles={multiSelectStyle} // Assuming `multiSelectStyle` is defined elsewhere
            />
          </div>

          <div className="mb-3">
            <label htmlFor="plan-link" className="col-form-label">
              Subscription Plan Link :{" "}
              <span className="text-danger">* {errors?.plan_link && <span className="text-danger">{errors?.plan_link}</span>}</span>
            </label>
            <Input
              type="text"
              className="form-control"
              id="plan-link"
              name="plan_link"
              placeholder="Enter plan link"
              value={formData?.plan_link}
              onChange={handleOnChange}
              onKeyDown={handleSpaceKeyPress}
            />
          </div>

          {/*  */}
          {/* <div className="mb-3">
            <label htmlFor="plan-link" className="col-form-label">
              Subscription Logo : <span className="text-danger">* {errors?.logo && <span className="text-danger">{errors?.logo}</span>}</span>
            </label>
            <Input
              type="file"
              className="form-control"
              id="logo"
              name="blogCoverImage"
              placeholder="Enter logo"
              // value={formData?.logo}
              // onChange={handleOnChange}
              accept="image/png, image/gif, image/jpeg"
              onChange={(e) => handleImageChange(e)}
              onKeyDown={handleSpaceKeyPress}
            />
          </div> */}

          {/*  */}
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">
              Subscription Description:{" "}
              <span className="text-danger">* {errors?.sub_description && <span className="text-danger">{errors?.sub_description}</span>}</span>
            </label>
            <textarea
              className="form-control"
              id="message-text"
              rows="4"
              name="sub_description"
              placeholder="Enter category description"
              value={formData?.sub_description}
              onChange={handleOnChange}
              onKeyDown={handleSpaceKeyPress}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <div className="modal-footer">
        <Button
          color="light"
          onClick={() => {
            setOpen(false);
            // setFormData({ sub_name: "", categoryId: "", plan_link: "", sub_description: "",sub_logo:"" });
            // setErrors({});
            // setOneSubcriptionData({});
          }}
        >
          Close
        </Button>
        <Button color="primary" onClick={formSubmit}>
          {oneSubcriptionData ? "Update" : "Add"}
          {/* {loader && (
            <Spinner size="sm" className="flex-shrink-0">
              Loading...
            </Spinner>
          )} */}
        </Button>
      </div>
    </Modal>
  );
};

export default AddSubscriptionModal;
