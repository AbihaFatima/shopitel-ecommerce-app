import React from 'react'
import styled from "styled-components"
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import "../index.css";
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";
import {useState} from 'react'


const Container = styled.div`
    height : 70px;
    background-color : 	#587272;
    font-color: white;
`;
const Wrapper = styled.div`
    color: white;
    padding: 10px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: white;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  color: white;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
`;
const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  color: white;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  background-color : #587272;
`;

const Input = styled.input`
  border: none;
  background-color : 	#587272;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 35px;
  color: white;
  
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  font-color: white;
`;

const Navbar = () => {
// const user = localStorage.getItem('persist:root');
const user = useSelector((state) => state.user.currentUser);
const quantity = useSelector(state=>state.cart.quantity);

    return (
        <Container>
            <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder = "Search" id="inputID"/>
                    <Search style={{ color: "white", fontSize: 18 }}/>
                </SearchContainer>
            </Left>
            <Link style={{ textDecoration: 'none' , color: 'white'}} to="/">
            <Center><Logo>Shopitel.</Logo></Center>
            </Link>
            <Right>
           
            
              <Link style={{ textDecoration: 'none' , color: 'white'}} to="/register">
              <MenuItem>Register</MenuItem>
              </Link>

              <Link style={{ textDecoration: 'none' , color: 'white'}} to="/login">
              <MenuItem>Sign In</MenuItem>
              </Link>

                <Link style={{ textDecoration: 'none' , color: 'white'}}  to="/cart" >
                 <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
               </MenuItem>
                 </Link>
                

            </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
