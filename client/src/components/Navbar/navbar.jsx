import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Box, Header, Image, Button, Paragraph } from 'grommet';
import logo from './logo.png';


class Navbar extends React.Component {
  
  render() {
    return (
      <Header
        direction="row"
        width="80%"
        align="center"
        justify="center"
        height="60px"
        elevation="medium"
      >
        <Box
          direction="row"
          align="center"
          justify="center"
          height="100%"
          width="auto"
        >
          <Box align="center" justify="center" height="100%" width="11%">
            <Image src={logo} height="100%" width="100%" fill="true" />
          </Box>
          <Box
            align="center"
            justify="center"
            height="100%"
            width="12%"
            onClick={this.fakehandleClick}
            hoverIndicator
          >
            <Button
              as={Link}
              to="/"
              align="center"
              justify="center"
              fill="true"
              onClick={this.fakehandleClick}
              focusIndicator="false"
            >
              <Paragraph fill="true" textAlign="center">
                Main
              </Paragraph>
            </Button>
          </Box>
          <Box
            align="center"
            justify="center"
            height="100%"
            width="21%"
            onClick={this.fakehandleClick}
            hoverIndicator
          >
            <Button
              as={Link}
              to="/recipes/new"
              align="center"
              justify="center"
              onClick={this.fakehandleClick}
              focusIndicator="false"
              fill="true"
            >
              <Paragraph fill="true" textAlign="center">
                Create recipe
              </Paragraph>
            </Button>
          </Box>
          {this.props.isLoggedIn ? (
            <>
              <Box
                align="center"
                justify="center"
                height="100%"
                width="19%"
                onClick={this.fakehandleClick}
                hoverIndicator
              >
                <Button
                  as={Link}
                  to={`/users/${this.props.userName}`}
                  align="center"
                  justify="center"
                  fill="true"
                  onClick={this.fakehandleClick}
                  focusIndicator="false"
                >
                  <Paragraph fill="true" textAlign="center">
                    My recipes
                  </Paragraph>
                </Button>
              </Box>
              <Box
                align="center"
                justify="center"
                height="100%"
                width="10%"
                onClick={this.fakehandleClick}
                hoverIndicator
              >
                <Button
                  as={Link}
                  to="/"
                  align="center"
                  justify="center"
                  onClick={this.logout.bind(this)}
                  focusIndicator="false"
                  fill="true"
                >
                  <Paragraph fill="true" textAlign="center">
                    Logout
                  </Paragraph>
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Box
                align="center"
                justify="center"
                height="100%"
                width="10%"
                onClick={this.fakehandleClick}
                hoverIndicator
              >
                <Button
                  as={Link}
                  to="/login"
                  align="center"
                  justify="center"
                  onClick={this.fakehandleClick}
                  focusIndicator="false"
                  fill="true"
                >
                  <Paragraph fill="true" textAlign="center">
                    Login
                  </Paragraph>
                </Button>
              </Box>
              <Box
                align="center"
                justify="center"
                height="100%"
                width="18%"
                onClick={this.fakehandleClick}
                hoverIndicator
              >
                <Button
                  as={Link}
                  to="/registration"
                  align="center"
                  justify="center"
                  onClick={this.fakehandleClick}
                  focusIndicator="false"
                  fill="true"
                  hoverIndicator
                >
                  <Paragraph fill="true" textAlign="center">
                    Registration
                  </Paragraph>
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Header>
    );
  }
}


export default (Navbar);