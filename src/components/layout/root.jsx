import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import VoxelDog from "../voxel-dog";
import { Container } from "@chakra-ui/react";
import Footer from "../footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Container maxW="100%" px="-6">
        <VoxelDog />
      </Container>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
