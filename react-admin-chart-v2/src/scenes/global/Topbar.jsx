import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkMode";
import NotificationsOutlinedIcon from "@mui/icons-material/Notifications";
import SettingsOutlinedIcon from "@mui/icons-material/Settings";
import PersonOutlinedIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

const styledBox = styled(Box);

const Topbar = () => {
	const theme = useTheme();
	const colors = tokens(theme.pallete.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box display="flex" justifyContent="space-between" p={2}>
			{/* SEARCH BAR */}
			<Box
				display="flex"
				backgroundColor={colors.primary[400]}
				borderRadius="3px"
			></Box>
			<InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
			<IconButton type="button" sx={{ p: 1 }}>
				<SearchIcon />
			</IconButton>

			{/* ICONS */}
			<Box display="flex">
				<IconButton onClick={colorMode.toggleColorMode}>
					{theme.palette.mode === "dark" ? (
						<DarkModeOutlinedIcon />
					) : (
						<LightModeOutlinedIcon />
					)}
				</IconButton>

				<IconButton>
					<NotificationsOutlinedIcon />
				</IconButton>
				<IconButton>
					<SettingsOutlinedIcon />
				</IconButton>
				<IconButton>
					<PersonOutlinedIcon />
				</IconButton>
			</Box>
		</Box>
	);
};

export default Topbar;
