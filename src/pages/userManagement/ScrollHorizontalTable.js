import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { DropdownItem, DropdownMenu, DropdownToggle, Input, UncontrolledDropdown } from "reactstrap";
import { getallUser } from "../../slices/usermanagementSlice/alluserSlice/thunk";
const ScrollHorizontalTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUser);
  console.log("users----->", users?.users?.payload);
  const allUsers = users?.users?.payload;
  useEffect(() => {
    const session = JSON.parse(sessionStorage.getItem("authUser"));
    console.log("session-->", session);
    dispatch(getallUser());
  }, [dispatch]);
  const columns = [
    // {
    //   name: <Input className="form-check-input fs-15" type="checkbox" name="checkAll" value="option1" />,
    //   cell: () => <input className="form-check-input fs-15" type="checkbox" name="checkAll" value="option1" />,
    // },
    // {
    //   name: <span className="font-weight-bold fs-13">SR No.</span>,
    //   selector: (row) => row.srNo,
    //   sortable: true,
    // },
    {
      name: <span className="font-weight-bold fs-13">ID</span>,
      selector: (row) => row.uid,
      sortable: true,
    },
    // {
    //   name: <span className="font-weight-bold fs-13">Purchase ID</span>,
    //   selector: (row) => row.purchaseId,
    //   sortable: true,
    // },
    {
      name: <span className="font-weight-bold fs-13">Name</span>,
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Email</span>,
      selector: (row) => row.email,
      sortable: true,
    },
    // {
    //   name: <span className="font-weight-bold fs-13">Assigned To</span>,
    //   selector: (row) => row.assigned,
    //   sortable: true,
    // },
    // {
    //   name: <span className="font-weight-bold fs-13">Create By</span>,
    //   selector: (row) => row.createdBy,
    //   sortable: true,
    // },
    {
      name: <span className="font-weight-bold fs-13">Create Date</span>,
      selector: (row) => row.created_at,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Status</span>,
      sortable: true,
      selector: (cell) => {
        switch (cell.active) {
          // case "Re-open":
          //   return <span className="badge badge-soft-info"> {cell.status} </span>;
          // case "On-Hold":
          //   return <span className="badge badge-soft-secondary"> {cell.status} </span>;
          case 0:
            return <span className="badge badge-soft-danger"> {" Deactive"} </span>;
          // case "Inprogress":
          //   return <span className="badge badge-soft-warning"> {cell.status} </span>;
          case 1:
            return <span className="badge badge-soft-primary"> {"Active"} </span>;
          // case "New":
          //   return <span className="badge badge-soft-success"> {cell.status} </span>;
          default:
            return <span className="badge badge-soft-success"> {"Active"} </span>;
        }
      },
    },
    // {
    //   name: <span className="font-weight-bold fs-13">Priority</span>,
    //   sortable: true,
    //   selector: (cell) => {
    //     switch (cell.priority) {
    //       case "High":
    //         return <span className="badge bg-danger"> {cell.priority} </span>;
    //       case "Medium":
    //         return <span className="badge bg-info"> {cell.priority} </span>;
    //       case "Low":
    //         return <span className="badge bg-success"> {cell.priority} </span>;
    //       default:
    //         return <span className="badge bg-danger"> {cell.priority} </span>;
    //     }
    //   },
    // },
    {
      name: <span className="font-weight-bold fs-13">Action</span>,
      sortable: true,
      cell: () => {
        return (
          <UncontrolledDropdown className="dropdown d-inline-block">
            <DropdownToggle className="btn btn-soft-secondary btn-sm" tag="button">
              <i className="ri-more-fill align-middle"></i>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              {/* <DropdownItem href="#">
                <i className="ri-eye-fill align-bottom me-2 text-muted"></i>View
              </DropdownItem> */}
              <DropdownItem className="edit-item-btn">
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>Edit
              </DropdownItem>
              <DropdownItem className="remove-item-btn">
                {" "}
                <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete{" "}
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        );
      },
    },
  ];

  const data = [
    {
      srNo: "01",
      id: "VLZ-452",
      purchaseId: "VLZ1400087402",
      title: "Post launch reminder/ post list",
      user: "Joseph Parker",
      assigned: "Alexis Clarke",
      createdBy: "Joseph Parker",
      createDate: "03 Oct, 2021",
      status: "Re-open",
      priority: "High",
    },
    {
      srNo: "02",
      id: "VLZ-453",
      purchaseId: "VLZ1400087425",
      title: "Additional Calendar",
      user: "Diana Kohler",
      assigned: "Admin",
      createdBy: "Mary Rucker",
      createDate: "05 Oct, 2021",
      status: "On-Hold",
      priority: "Medium",
    },
    {
      srNo: "03",
      id: "VLZ-454",
      purchaseId: "VLZ1400087438",
      title: "Make a creating an account profile",
      user: "Tonya Noble",
      assigned: "Admin",
      createdBy: "Tonya Noble",
      createDate: "27 April, 2022",
      status: "Closed",
      priority: "Low",
    },
    {
      srNo: "04",
      id: "VLZ-455",
      purchaseId: "VLZ1400087748",
      title: "Apologize for shopping Error!",
      user: "Joseph Parker",
      assigned: "Alexis Clarke",
      createdBy: "Joseph Parker",
      createDate: "14 June, 2021",
      status: "Inprogress",
      priority: "Medium",
    },
    {
      srNo: "05",
      id: "VLZ-456",
      purchaseId: "VLZ1400087547",
      title: "Support for theme",
      user: "Donald Palmer",
      assigned: "Admin",
      createdBy: "Donald Palmer",
      createDate: "25 June, 2021",
      status: "Closed",
      priority: "Low",
    },
    {
      srNo: "07",
      id: "VLZ-458",
      purchaseId: "VLZ1400087785",
      title: "Change email option process",
      user: "James Morris",
      assigned: "Admin",
      createdBy: "James Morris",
      createDate: "12 March, 2022",
      status: "Open",
      priority: "High",
    },
    {
      srNo: "08",
      id: "VLZ-460",
      purchaseId: "VLZ1400087745",
      title: "Support for theme",
      user: "Nathan Cole",
      assigned: "Nancy Martino",
      createdBy: "Nathan Cole",
      createDate: "28 Feb, 2022",
      status: "On-Hold",
      priority: "Low",
    },
    {
      srNo: "09",
      id: "VLZ-461",
      purchaseId: "VLZ1400087179",
      title: "Form submit issue",
      user: "Grace Coles",
      assigned: "Admin",
      createdBy: "Grace Coles",
      createDate: "07 Jan, 2022",
      status: "New",
      priority: "High",
    },
    {
      srNo: "10",
      id: "VLZ-462",
      purchaseId: "VLZ140008856",
      title: "Edit customer testimonial",
      user: "Freda",
      assigned: "Alexis Clarke",
      createdBy: "Freda",
      createDate: "16 Aug, 2021",
      status: "Closed",
      priority: "Medium",
    },
    {
      srNo: "11",
      id: "VLZ-463",
      purchaseId: "VLZ1400078031",
      title: "Ca i have an e-copy invoice",
      user: "Williams",
      assigned: "Admin",
      createdBy: "Williams",
      createDate: "24 Feb, 2022",
      status: "Open",
      priority: "Low",
    },
    {
      srNo: "12",
      id: "VLZ-464",
      purchaseId: "VLZ1400087416",
      title: "Brand logo design",
      user: "Richard V.",
      assigned: "Admin",
      createdBy: "Richard V.",
      createDate: "16 March, 2021",
      status: "Inprogress",
      priority: "High",
    },
    {
      srNo: "13",
      id: "VLZ-466",
      purchaseId: "VLZ1400089015",
      title: "Issue with finding information about order ?",
      user: "Olive Gunther",
      assigned: "Alexis Clarke",
      createdBy: "Schaefer",
      createDate: "32 March, 2022",
      status: "New",
      priority: "High",
    },
    {
      srNo: "14",
      id: "VLZ-467",
      purchaseId: "VLZ1400090324",
      title: "Make a creating an account profile",
      user: "Edwin",
      assigned: "Admin",
      createdBy: "Edwin",
      createDate: "05 April, 2022",
      status: "Inprogress",
      priority: "Low",
    },
  ];
  return <DataTable columns={columns} data={allUsers} pagination />;
};

export default ScrollHorizontalTable;
