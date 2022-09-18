import React, { useState } from "react";
// import CreateIcon from "@material-ui/icons/Create";
// import {
// 	Box, button, Snackbar, Table,
// 	TableBody, tr, TableHead, TableRow
// } from "@material-ui/core";
// import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
// import AddBoxIcon from "@material-ui/icons/AddBox";
// import DoneIcon from "@material-ui/icons/Done";
// import ClearIcon from "@material-ui/icons/Clear";
// import { makeStyles } from "@material-ui/core/styles";
// import Alert from "@material-ui/lab/Alert";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";

// Creating styles
// const useStyles = makeStyles({
// 	root: {
// 		"& > *": {
// 			borderBottom: "unset",
// 		},
// 	},
// 	table: {
// 		minWidth: 650,
// 	},
// 	snackbar: {
// 		bottom: "104px",
// 	},
// });

function UserDetailsEditPage() {
    const userDetails = JSON.parse(localStorage.getItem('data'));
	// Creating style object
	// const classes = useStyles();

	// Defining a state named rows
	// which we can update by calling on setRows function
	const [rows, setRows] = useState([
		{ id: 1, name: userDetails.name, email: userDetails.email },
	]);
console.log("233",rows);
	// Initial states
	const [open, setOpen] = React.useState(false);
	const [isEdit, setEdit] = React.useState(false);
	const [disable, setDisable] = React.useState(true);
	const [showConfirm, setShowConfirm] = React.useState(false);

	// Function For closing the alert snackbar
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	// Function For adding new row object
	const handleAdd = () => {
		setRows([
			...rows,
			{
				id: rows.length + 1, name: "",
				email: ""
			},
		]);
		setEdit(true);
	};

	// Function to handle edit
	const handleEdit = (i) => {
		// If edit mode is true setEdit will
		// set it to false and vice versa
		setEdit(!isEdit);
	};

	// Function to handle save
	const handleSave = () => {
		setEdit(!isEdit);
		setRows(rows);
		console.log("saved : ", rows);
		setDisable(true);
		setOpen(true);
	};

	// The handleInputChange handler can be set up to handle
	// many different inputs in the form, listen for changes
	// to input elements and record their values in state
	const handleInputChange = (e, index) => {
		setDisable(false);
		const { name, value } = e.target;
		const list = [...rows];
		list[index][name] = value;
		setRows(list);
	};

	// Showing delete confirmation to users
	const handleConfirm = () => {
		setShowConfirm(true);
	};

	// Handle the case of delete confirmation where
	// user click yes delete a specific row of id:i
	const handleRemoveClick = (i) => {
		const list = [...rows];
		list.splice(i, 1);
		setRows(list);
		setShowConfirm(false);
	};

	// Handle the case of delete confirmation
	// where user click no
	const handleNo = () => {
		setShowConfirm(false);
	};

return (
	<tbody>
	{/* <Snackbar
		open={open}
		autoHideDuration={2000}
		onClose={handleClose}
		className={classes.snackbar}
	>
		<Alert onClose={handleClose} severity="success">
		Record saved successfully!
		</Alert>
	</Snackbar> */}
	<div margin={1}>
		<div style={{ display: "flex", justifyContent: "space-between" }}>
		<div>
			{isEdit ? (
			<div>
				<button onClick={handleAdd}>
				{/* <AddBoxIcon onClick={handleAdd} /> */}
				ADD
				</button>
				{rows.length !== 0 && (
				<div>
					{disable ? (
					<button disabled align="right" onClick={handleSave}>
						{/* <DoneIcon /> */}
						SAVE
					</button>
					) : (
					<button align="right" onClick={handleSave}>
						{/* <DoneIcon /> */}
						SAVE
					</button>
					)}
				</div>
				)}
			</div>
			) : (
			<div>
				<button onClick={handleAdd}>
				{/* <AddBoxIcon onClick={handleAdd} /> */}
				ADD
				</button>
				<button align="right" onClick={handleEdit}>
				{/* <CreateIcon /> */}
				EDIT
				</button>
			</div>
			)}
		</div>
		</div>
		<tr align="center"></tr>

		<table
		// className={classes.table}
		size="small"
		aria-label="a dense table"
		>
		<th>
			<tr>
			<td>First Name</td>
			<tr>Last Name</tr>
			<tr align="center">City</tr>
			<tr align="center"></tr>
			</tr>
		</th>
		<tbody>
			{rows.map((row, i) => {
			return (
				<div>
				<tr>
					{isEdit ? (
					<div>
						<tr padding="none">
						<input
							value={row.name}
							name="name"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</tr>
						<tr padding="none">
						<input
							value={row.email}
							name="email"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</tr>
						
					</div>
					) : (
					<div>
						<tr component="th" scope="row">
						{row.name}
						</tr>
						<tr component="th" scope="row">
						{row.email}
						</tr>
						{/* <tr component="th" scope="row" align="center">
						{row.city}
						</tr> */}
						<tr
						component="th"
						scope="row"
						align="center"
						></tr>
					</div>
					)}
					{isEdit ? (
					<button className="mr10" onClick={handleConfirm}>
						{/* <ClearIcon /> */}
                        Clear
					</button>
					) : (
					<button className="mr10" onClick={handleConfirm}>
						{/* <DeleteOutlineIcon /> */}
                        Delete
					</button>
					)}
					{showConfirm && (
					<div>
						<div
						open={showConfirm}
						onClose={handleNo}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
						>
						<div id="alert-dialog-title">
							{"Confirm Delete"}
						</div>
						<div>
							<div id="alert-dialog-description">
							Are you sure to delete
							</div>
						</div>
						<div>
							<button
							onClick={() => handleRemoveClick(i)}
							color="primary"
							autoFocus
							>
							Yes
							</button>
							<button
							onClick={handleNo}
							color="primary"
							autoFocus
							>
							No
							</button>
						</div>
						</div>
					</div>
					)}
				</tr>
				</div>
			);
			})}
		</tbody>
		</table>
	</div>
	</tbody>
);
}

export default UserDetailsEditPage;
