import DashBoard from "./dashBoard";
import Doctor from "./doctor";
import Medicine from "./medicine";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Test from "./test";
import Chat from "./chat";
import HealthRecord from "./healthRecord";

export const pageCms = [
  {
    path: "/doctor",
    element: <Doctor />,
    name: "Doctor",
    children: [
      {
        icon: <AssignmentIcon />,
        path: "",
        element: <Test />,
        name: "Doctor",
      },
      {
        icon: <AssignmentIcon />,
        path: "",
        element: <Test />,
        name: "Doctor",
      },
    ],
  },
  {
    path: "/chat",
    element: <Chat />,
    name: "Chat",
    children: [
      {
        icon: <AssignmentIcon />,
        path: "",
        element: <Test />,
        name: "Chat",
      },
    ],
  },
  {
    path: "/heath-records",
    element: <HealthRecord />,
    name: "Heath's Record",
    children: [
      {
        icon: <AssignmentIcon />,
        path: "",
        element: <Test />,
        name: "Heath's Record",
      },
    ],
  },
  {
    path: "/medicines",
    element: <Medicine />,
    name: "Medicines",
    children: [
      {
        icon: <AssignmentIcon />,
        path: "",
        element: <Test />,
        name: "Medicines",
      },
    ],
  },
];
