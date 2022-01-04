import {Component} from "react";
import {StyledCard, StyledButton, MyP} from "./Card.styles";
import {Flex} from "../../Users/Users.styles";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <Flex>
        <StyledCard>
          {this.state.count === 0 ? (
            <MyP> Hello x times </MyP>
          ) : (
            <MyP> Hello {this.state.count} times</MyP>
          )}

          <StyledButton
            onClick={() => this.setState({count: this.state.count + 1})}
          >
            Increase
          </StyledButton>
          <StyledButton
            onClick={() => this.setState({count: this.state.count - 1})}
          >
            Decrease
          </StyledButton>
          <StyledButton onClick={() => this.setState({count: 0})}>
            Reset
          </StyledButton>
        </StyledCard>
      </Flex>
    );
  }
}
export default Card;
