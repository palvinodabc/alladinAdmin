import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { DropdownItem, DropdownMenu, DropdownToggle, Spinner, UncontrolledDropdown } from "reactstrap";
import { deleteSubcription, getAllSubcriptions, updateSubcription } from "../../slices/subscriptions/allSubscriptions/thunk";
import AddSubscriptionModal from "./AddSubscriptionModal";
import DeleteModal from "./DeleteModal";
import Loader from "../../Components/Common/Loader";

const ScrollHorizontalTable = ({ allData }) => {
  const allSubscription = useSelector((state) => state);
  const allDataaa = allSubscription.AllSubscription.allSubscription.data;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [subscriptionId, setSubscriptionId] = useState();
  const [subscriptionInfo, setSubscriptionInfo] = useState();
  const [oneSubcriptionData, setOneSubcriptionData] = useState({});
  const [loading, setLoading] = useState(false);
  const [formKey, setFormKey] = useState(0);

  const editSubcription = (rowData) => {
    setOneSubcriptionData(rowData);
    setFormKey((prevKey) => prevKey + 1);
    setOpen(true);
  };

  const handleDeleteSubscription = () => {
    setLoading(true);
    dispatch(deleteSubcription(subscriptionId))
      .then(() => {
        dispatch(getAllSubcriptions());
      })
      .then(() => {
        setLoading(false);
      });
    setDeleteModal(false);
  };

  const onClickDelete = (row) => {
    setSubscriptionInfo(row);
    setSubscriptionId(row.sub_id);
    setDeleteModal(true);
  };

  const handleUpDatesubscription = (dataaa) => {
    setLoading(true);
    dispatch(updateSubcription(dataaa))
      .then(() => {
        dispatch(getAllSubcriptions());
      })
      .then(() => {
        setLoading(false);
      });
  };
  const columns = [
    {
      name: <span className="font-weight-bold fs-14">ID</span>,
      width: "120px",
      selector: (row) => row.sub_id,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-14">Logo</span>,
      width: "160px",
      selector: (row) => <img src={row.sub_logo} alt="Logo" style={{ width: "30px", height: "30px" }} />,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-14">Name</span>,
      width: "160px",
      selector: (row) => row.sub_name,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-14">Link</span>,
      width: "160px",
      selector: (row) => (
        <a
          href={row.plan_link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "blue",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Link
        </a>
      ),
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-14">Description</span>,
      width: "260px",
      selector: (row) => row.sub_description,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-14">Active</span>,
      width: "230px",
      selector: (row) => {
        switch (row.active) {
          case 1:
            return <span className="badge badge-soft-secondary"> {"Active"} </span>;
          case 0:
            return <span className="badge badge-soft-danger"> {"Deactive"} </span>;
          default:
            return <span className="badge badge-soft-success"> {"Active"} </span>;
        }
      },
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-14">Action</span>,
      width: "90px",
      sortable: true,
      cell: (row) => {
        return (
          <UncontrolledDropdown className="dropdown d-inline-block">
            <DropdownToggle className="btn btn-soft-secondary btn-sm" tag="button">
              <i className="ri-more-fill align-middle"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              {/* <DropdownItem href="#">
                <i className="ri-eye-fill align-bottom me-2 text-muted"></i>View
              </DropdownItem> */}
              <DropdownItem className="edit-item-btn" onClick={() => editSubcription(row)}>
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit
              </DropdownItem>
              <DropdownItem
                className="remove-item-btn"
                onClick={() => {
                  onClickDelete(row);
                }}
              >
                {" "}
                <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete{" "}
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
      },
    },
  ];

  // const customStyles = {
  //   headCells: {
  //     style: {
  //       minWidth: "100px",
  //       maxWidth: "3%",
  //     },
  //   },
  //   cells: {
  //     style: {
  //       minWidth: "100px",
  //       maxWidth: "3%",
  //     },
  //   },
  // };
  // customStyles = { customStyles };

  return (
    <>
      {loading ? <Loader /> : <DataTable columns={columns} data={open || deleteModal ? allDataaa : allData} pagination />}

      <AddSubscriptionModal
        setOpen={setOpen}
        open={open}
        oneSubcriptionData={oneSubcriptionData}
        setOneSubcriptionData={setOneSubcriptionData}
        handleUpDatesubscription={handleUpDatesubscription}
        formKey={formKey}
      />
      <DeleteModal
        show={deleteModal}
        onDeleteClick={() => handleDeleteSubscription()}
        onCloseClick={() => setDeleteModal(false)}
        text={subscriptionInfo}
      />
    </>
  );
};

export default ScrollHorizontalTable;
