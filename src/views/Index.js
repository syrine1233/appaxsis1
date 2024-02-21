import {
  Container,
  Row,
} from "reactstrap";

import Header from "components/Headers/Header.js";
import PageVisits from "../components/PageVisits";
import SocialTraffic from "../components/SocialTraffic";
import Overview from "../components/Linechart";
import Performance from "../components/Barchart";
import PieChart from "components/Piechart";
import Linechart from "../components/Linechart";
const Index = () => {
 
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Linechart/>
          <Performance/>
        </Row>
        <Row className="mt-5">
        <SocialTraffic/>
        <PieChart/>
        </Row>
        <Row className="mt-5">
        <PageVisits/>
        </Row>
      </Container>
    </>
  );
};

export default Index;
