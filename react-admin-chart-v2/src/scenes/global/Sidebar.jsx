import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IConButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import Home from "@mui/material/Home";
import PeopleOutlinedIcon from "@mui/icons-material/LightMode";
import ContactsOutlinedIcon from "@mui/icons-material/DarkMode";
import ReceiptOutlinedIcon from "@mui/icons-material/Notifications";
import PersonOutlinedIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/Search";
import BarChartOutlinedIcon from "@mui/icons-material/Person";
import PieChartOutlinedIcon from "@mui/icons-material/Search";
import TimelineOutlinedIcon from "@mui/icons-material/Person";
import MenuOutlinedIcon from "@mui/icons-material/Search";
import MapOutlinedIcon from "@mui/icons-material/Search";

const Sidebar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palatte.mode);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState("Dashboard");

	return (
		<Box
			sx={{
				"& .pro-sidebar-inner": {
					background: `${colors.primary[400]} !important`
				},
				"& .pro-icon-wrapper": {
					backgroundColor: "transparent !important"
				},
				"& .pro-inner-item": {
					padding: "5px 35px 5px 30px !important"
				},
				"& .pro-inner-item:hover": {
					color: "#868dfb !important"
				},
				"& .pro-menu-item.active": {
					color: "#6870fa !important"
				}
			}}
		></Box>
	);
};

export default Sidebar;
