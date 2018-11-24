import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { ms, styled, Wrapper, Gradient, colors } from "styles";

const Container = styled.div`
  ${props => (props.gradient ? Gradient(props.gradient) : Gradient())}
  box-shadow: 0 0 3px 0 ${colors.black};
  padding: ${ms(-1)} 0;
`;

const Content = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    text-transform: uppercase;
    fonst-size: ${ms(2)};
    font-weight: 300;
    font-family: MuseoSans;
  }
`;
//
const Header = ({ data, gradient }) => (
  <Container gradient={gradient}>
    <Content>
      <Link to="/">
        <Img fixed={data.file.childImageSharp.fixed} />
      </Link>

      <nav>
        <Link to="/"> Home</Link>
        <Link to="/signature"> Signature</Link>
        <Link to="/signature"> Signature</Link>
        <Link to="/signature"> Signature</Link>
      </nav>
    </Content>
  </Container>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "logo_white.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Header data={data} {...props} />}
  />
);
