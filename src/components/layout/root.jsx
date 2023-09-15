import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import VoxelDog from "../voxel-dog";
import { Container } from "@chakra-ui/react";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Container maxW="100%" px="-6">
        <VoxelDog />
      </Container>
      <Outlet />
    </div>
  );
};

export default Root;
