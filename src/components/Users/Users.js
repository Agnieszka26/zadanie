import React, {Component} from "react";
import Navigation from "../Navigation/Navigation";
import axios from "axios";
import {
  StyledCard,
  StyledButton,
  MyP,
} from "../HomePage/Card/Card.styles";
import {
  Flex,
  StyledDetailsTitle,
  StyledDetailsSmallTitle,
} from "./Users.styles";

const url = "https://jsonplaceholder.typicode.com/users";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUsersFeched: false,
      isUserSelected: false,
      selectedUser: {},
    };
    this.getUsers = this.getUsers.bind(this);
  }

  handleOfClick = (id) => {
    const selectedUser = this.state.users.find((user) => user.id === id);
    this.setState(() => ({selectedUser}));
    this.setState(() => ({isUserSelected: true}));
  };

  async getUsers() {
    let users = await axios
      .get(url)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({users: users});
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const {users} = this.state;
    const {isUserSelected} = this.state;

    return (
      <>
        <Navigation />
        <Flex>
          {users && (
            <StyledCard>
              {users.map((user) => {
                const {name, id} = user;

                return (
                  <StyledButton
                    value={id}
                    name={name}
                    onClick={() => this.handleOfClick(user.id)}
                    key={id}
                  >
                    {name}
                  </StyledButton>
                );
              })}
            </StyledCard>
          )}
          <StyledCard>
            {isUserSelected ? (
              <div>
                <StyledDetailsTitle> Details: </StyledDetailsTitle>
                <StyledDetailsSmallTitle> name: </StyledDetailsSmallTitle>
                <MyP> {this.state.selectedUser.name} </MyP>
                <StyledDetailsSmallTitle> email: </StyledDetailsSmallTitle>
                <MyP> {this.state.selectedUser.email} </MyP>
                <StyledDetailsSmallTitle> street: </StyledDetailsSmallTitle>
                <MyP>{this.state.selectedUser.address.street} </MyP>
                <StyledDetailsSmallTitle> city: </StyledDetailsSmallTitle>
                <MyP> {this.state.selectedUser.address.city} </MyP>
              </div>
            ) : (
              <StyledDetailsSmallTitle>
                Select user, please.
              </StyledDetailsSmallTitle>
            )}
          </StyledCard>
        </Flex>
      </>
    );
  }
}

export default Users;
