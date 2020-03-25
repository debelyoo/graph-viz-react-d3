import * as React from "react";
import { DashboardLayout, PageList } from "@sqooba/material-atoms";
import sqoobaLogo from "./images/sqooba-white.png";
import HomeIcon from "@material-ui/icons/Home";
import Home from "./pages/Home";

const pageList: PageList = [
  {
    pages: [
      {
        path: "/",
        icon: <HomeIcon />,
        title: "Home",
        component: Home,
      },
    ],
  },
];

const AppContainer: React.FC<{}> = () => {
  return <DashboardLayout title="Sqooba App" logo={sqoobaLogo} pageList={pageList} />;
};

export default AppContainer;
