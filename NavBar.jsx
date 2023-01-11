import React from "react";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="top_header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <div>
              <img
                src="Radical_minds.png"
                alt="logo"
                style={{
                  height: "50px",
                  width: " 200px",
                  margintop: "7px",
                  marginRight: "30px",
                }}
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="topnav-right">
              <Navbar className="navbar navbar-expand-sm bg-light">
                <Form class="navbar-form">
                  <Form.Control
                    type="search"
                    placeholder="Search your ticket here"
                    aria-label="Search"
                  />
                </Form>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;

// import { AppBar, InputBase, styled, Toolbar } from "@mui/material";
// import "@fontsource/poppins";

// const StyledToolbar = styled(Toolbar)({
//   display: "flex",
//   justifyContent: "space-between",
// });

// const Search = styled("div")(({ theme }) => ({
//   backgroundColor: "white",
//   justifyContent: "space-between",
//   padding: "20 40px",

//   borderRadius: theme.shape.borderRadius,
//   width: "40%",
// }));

// const Navbar = () => {
//   return (
//     <AppBar position="sticky">
//       <StyledToolbar>
//         <Search className="search">
//           <InputBase placeholder="search TCKT Number" />
//         </Search>
//       </StyledToolbar>
//     </AppBar>
//   );
// };

// export default Navbar;
