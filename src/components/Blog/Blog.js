import Navigation from "../Navigation/Navigation";
import React, {Component} from "react";
import {StyledContainer, Title, Text} from "./Blog.styles";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRender: 3,
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let data = await axios
      .get(url)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({posts: data});
  }

  render() {
    const {posts} = this.state;
    const numberOfRender = this.state.numberOfRender;

    return (
      <div>
        <Navigation />

        {posts ? (
          <div>
            {posts
              .filter((post) => post.id <= numberOfRender)
              .map((post, index) => (
                <StyledContainer key={index}>
                  <Title>{post.title}</Title>
                  <Text> {post.body}</Text>
                </StyledContainer>
              ))}
          </div>
        ) : (
          <p>Loading ... </p>
        )}
      </div>
    );
  }
}
export default Blog;
