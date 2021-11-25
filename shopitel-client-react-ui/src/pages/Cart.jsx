import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";

require('dotenv').config();
const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  // const user = useSelector((state) => state.user.currentUser);
  // console.log(user);

  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
        <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                  $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Shopitel"
              image="data:image/png;base64,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"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
            <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />

    </Container>
  );
};

export default Cart;
