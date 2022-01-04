import React from "react";
import {Link} from "react-router-dom";
import {StyledList, StyledNavigation, StyledLi, MyA} from "./Navigation.styles";


export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledList>
        <StyledLi>
          {" "}
          <Link to="/" style={{textDecoration: "none"}}>
            {" "}
            <MyA> Home </MyA>
          </Link>{" "}
        </StyledLi>
        <StyledLi>
          {" "}
          <Link to="/blog" style={{textDecoration: "none"}}>
            <MyA> Blog </MyA>
          </Link>{" "}
        </StyledLi>
        <StyledLi>
          {" "}
          <Link to="/users" style={{textDecoration: "none"}}>
            {" "}
            <MyA> Users </MyA>
          </Link>{" "}
        </StyledLi>
      </StyledList>
    </StyledNavigation>
  );
}

// class Navigation extends Component {
//   render() {
//     return (
//       <>
//         <StyledNavigation>
//           <StyledList>
//             <StyledLi>
//               <Link to="/" style={{textDecoration: "none"}}>
//                 <MyA> Home </MyA>
//               </Link>
//             </StyledLi>
//             <StyledLi>
//               <Link to="/blog" style={{textDecoration: "none"}}>
//                 <MyA> Blog </MyA>
//               </Link>
//             </StyledLi>
//             <StyledLi>
//               <Link to="/users" style={{textDecoration: "none"}}>
//                 <MyA> Users </MyA>
//               </Link>
//             </StyledLi>
//           </StyledList>
//         </StyledNavigation>
//       </>
//     );
//   }
// }
// export default Navigation;
