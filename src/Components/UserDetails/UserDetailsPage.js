import React , { useState }from "react";

export default function UserDetailsPage(data){
const userDetails = JSON.parse(localStorage.getItem('data'));
  console.log("@@@@@@@@",userDetails);

  const [rows, setRows] = useState([
    { id: 1,
         name: userDetails.name,
         email: userDetails.email,
        password: userDetails.password ,
        city: userDetails.city,
        age: userDetails.age
    },
]);
const [open, setOpen] = React.useState(false);
	const [isEdit, setEdit] = React.useState(false);
	const [disable, setDisable] = React.useState(true);
	const [showConfirm, setShowConfirm] = React.useState(false);
  // Function to handle edit
	const handleEdit = (i) => {
		// If edit mode is true setEdit will
		// set it to false and vice versa
		setEdit(!isEdit);
	};

    // Function For adding new row object
	const handleAdd = () => {
		setRows([
			...rows,
			{
				id: rows.length + 1, 
                name: "",
				email: "",
                password:"",
                age:"",
                city:"",
			},
		]);
		setEdit(true);
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

    // Handle the case of delete confirmation
	const handleNo = () => {
		setShowConfirm(false);
	};

    // Handle the case of delete confirmation where
	const handleRemoveClick = (i) => {
		const list = [...rows];
		list.splice(i, 1);
		setRows(list);
		setShowConfirm(false);
	};

  return (
    <div class="container">
      <h1>UserDetails Table</h1>
     
      <table class="rwd-table">
        <tbody>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>PassWord</th>
            <th>City</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
          {/* <tr> */}
          {rows.map((row, i) => {
			return (
				
				<tr>
					{isEdit ? (
					<>
						<td>
						<input
							value={row.name}
							name="name"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
						<td>
						<input
							value={row.email}
							name="email"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
                        <td>
						<input
							value={row.password}
							name="password"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
						<td>
						<input
							value={row.city}
							name="city"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
                        <td>
						<input
							value={row.age}
							name="age"
							onChange={(e) => handleInputChange(e, i)}
						/>
						</td>
				</>
					) : (
					<>
						<td>{row.name}</td>
						<td>{row.email}</td>
						<td>{row.password}</td>
						<td>{row.age}</td>
						<td>{row.city}</td>
					</>
					)}
                    <tr>
                    {isEdit ? (
					<button className="mr10" onClick={handleConfirm}>
                        Clear
					</button>
					) : (
					<button className="mr10" onClick={handleConfirm}>
                        Delete
					</button>
					)}
                    </tr>
					<td>
            {isEdit ? (
			<div>
				
				{rows.length !== 0 && (
				<div>
					{disable ? (
					<button disabled align="right" onClick={handleSave}>
						SAVE
					</button>
					) : (
					<button align="right" onClick={handleSave}>
						
						SAVE
					</button>
					)}
				</div>
				)}
			</div>
			) : (
				<button align="right" onClick={handleEdit}>
				EDIT
				</button>
			)}
            </td>
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
				
			);
			})}
            
        </tbody>
      </table>
    </div>
  );
}