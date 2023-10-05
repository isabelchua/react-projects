import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettings";
import LockOpenOutlinedIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityOutlinedIcon from "@mui/icons-material/AdminPanelSettings";
import Header from "../../components/Header";

const Team = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{ field: "id", headerName: "ID" },
		{
			field: "name",
			headerName: "ID",
			flex: 1,
			cellClassName: "name-column--cell"
		},
		{
			field: "age",
			headerName: "Age",
			type: "number",
			headerAlign: "left",
			align: "left"
		},
		{
			field: "email",
			headerName: "Email",
			flex: 1
		},
		{
			field: "access",
			headerName: "Access Level",
			flex: 1,
			renderCell: ({ row: { access } }) => {
				return (
					<Box
						width="60%"
						m="0 auto"
						p="5px"
						display="flex"
						justifyContent="center"
						backgroundColor={
							access === "admin"
								? colors.greenAccent[600]
								: colors.greenAccent[700]
						}
						borderRadius="4px"
					>
						{access === "admin" && <AdminPanelSettingsOutlinedIcon />}
						{access === "manager" && <SecurityOutlinedIcon />}
						{access === "user" && <LockOpenOutlinedIcon />}
					</Box>
				);
			}
		}
	];

	return (
		<Box>
			<Header title="TEAM" subtitle="Managing the Team Members" />
			<Box>
				<DataGrid rows={mockDataTeam} columns={columns} />
			</Box>
		</Box>
	);
};
