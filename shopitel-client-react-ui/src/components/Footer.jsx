import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { Link } from "react-router-dom";
  
  const Container = styled.div`
    display: flex;
    background-color : #324040;
    font-color: white;
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1`
    color: white;
  `;
  
  const Desc = styled.p`
    color: white;
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;
  
  const Title = styled.h3`
    color: white;
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    color: white;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    color: white;
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;
  const Bottom = styled.div`
  background-color : #324040;
  padding-bottom: 10px;
`;
  
  const ContactItem = styled.div`
    color: white;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <div>
      <Container>
        <Left>
          <Logo>Shopitel.</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem><Link to="/" style={{ textDecoration: 'none' , color: 'white'}}> Home</Link></ListItem>
            <ListItem><Link to="/cart" style={{ textDecoration: 'none' , color: 'white'}}>Cart</Link></ListItem>
            <ListItem><Link to="/products/women" style={{ textDecoration: 'none' , color: 'white'}}>Women Fashion</Link></ListItem>
            <ListItem><Link to="/products/men" style={{ textDecoration: 'none' , color: 'white'}}>Men Fashion</Link></ListItem>

            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem><Link to="/cart" style={{ textDecoration: 'none' , color: 'white'}}>Wishlist</Link></ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"  , color: 'white'}}/> 622 , Dubai Silicon Oasis 98336
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"  , color: 'white'}}/> +971 X56 78X X0XX
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"  , color: 'white'}} /> contact@shopitel.dev
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
      <Bottom style={{textAlign: 'center', color: 'white'}}>
        
      Made with 💚 <br />
      ©2021.  All rights reserved. 
      </Bottom>
      </div>
    );
  };
  
  export default Footer;