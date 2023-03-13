import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Index = (props) => {
  return (
    <>
      <Header/>
      <Content>{props.children}</Content>
      <Footer/>
    </>
  )
}
export default Index;