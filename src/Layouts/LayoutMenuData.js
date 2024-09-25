import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isHome, setIsHome] = useState(false);
  const [isDashboard, setIsDashboard] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isSubscriptionGraphs, setIsSubscriptionGraphs] = useState(false);
  const [isUserManagement, setIsUserManagement] = useState(false);
  const [isSubscriptions, setIsSubscriptions] = useState(false);
  const [isPaymentMethod, setIsPaymentMethod] = useState(false);
  // const [isLogout, setIsLogout] = useState(false);
  const [isForms, setIsForms] = useState(false);
  const [isTables, setIsTables] = useState(false);
  const [isCharts, setIsCharts] = useState(false);
  const [isIcons, setIsIcons] = useState(false);
  const [isMaps, setIsMaps] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);

  // Authentication
  const [isLogout, setIsLogout] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const [isError, setIsError] = useState(false);

  // Pages
  //   const [isProfile, setIsProfile] = useState(false);
  const [isLanding, setIsLanding] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Home");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id)) document.getElementById(id).classList.remove("show");
      });
    }
  }
  // Subscription graphs
  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Home") {
      setIsHome(false);
    }
    if (iscurrentState !== "Profile") {
      setIsProfile(false);
    }
    if (iscurrentState !== "Subscription_graphs") {
      setIsSubscriptionGraphs(false);
    }
    if (iscurrentState !== "UserManagement") {
      setIsUserManagement(false);
    }
    if (iscurrentState !== "Subscriptions") {
      setIsSubscriptions(false);
    }
    if (iscurrentState !== "Payment Method") {
      setIsPaymentMethod(false);
    }
    if (iscurrentState !== "Logout") {
      setIsLogout(false);
    }
    if (iscurrentState !== "Tables") {
      setIsTables(false);
    }
    if (iscurrentState !== "Charts") {
      setIsCharts(false);
    }
    if (iscurrentState !== "Icons") {
      setIsIcons(false);
    }
    if (iscurrentState !== "Maps") {
      setIsMaps(false);
    }
    if (iscurrentState !== "MuliLevel") {
      setIsMultiLevel(false);
    }
    if (iscurrentState === "Widgets") {
      history("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
    if (iscurrentState !== "Landing") {
      setIsLanding(false);
    }
  }, [
    history,
    iscurrentState,
    isHome,
    isProfile,
    isSubscriptionGraphs,
    isUserManagement,
    isPaymentMethod,
    isSubscriptions,
    isLogout,
    isForms,
    isTables,
    isCharts,
    isIcons,
    isMaps,
    isMultiLevel,
  ]);
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboards",
      icon: "ri-dashboard-2-fill",
      link: "/dashboard",
      stateVariables: isDashboard,
      click: (e) => {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
    },
    {
      id: "userManagement",
      label: "UserManagement",
      icon: "ri-user-settings-fill",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsUserManagement(!isUserManagement);
        setIscurrentState("UserManagement");
        updateIconSidebar(e);
      },
      stateVariables: isUserManagement,
      subItems: [
        {
          id: "allUsersSUbscriptions",
          label: "All Users SUbscriptions",
          link: "/allUserSubs",
          parentId: "tables",
        },
        {
          id: "allUsers",
          label: "All Users",
          link: "/all_users",
          parentId: "tables",
        },
        {
          id: "premiumUsers",
          label: "Premium Users",
          link: "/premium",
          parentId: "tables",
        },
        {
          id: "freeUsers",
          label: "Free Users",
          link: "/freeuser",
          parentId: "tables",
        },
      ],
    },
    {
      id: "subscriptions",
      label: "Subscriptions",
      icon: "ri-pages-line",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsSubscriptions(!isSubscriptions);
        setIscurrentState("Subscriptions");
        updateIconSidebar(e);
      },
      stateVariables: isSubscriptions,
      subItems: [
        {
          id: "allSubscriptions",
          label: "All Subscriptions",
          link: "/allSubscriptions",
          parentId: "tables",
        },
        {
          id: "subscriptionPlans",
          label: "Subscription Plans",
          link: "/subscriptionplans",
          parentId: "tables",
        },
      ],
    },
  ];

  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
