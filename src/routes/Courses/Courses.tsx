import { Box, Flex } from "@workday/canvas-kit-react/layout";
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Box>Courses</Box>
      <Link to="/courses/sample">Sample</Link>
    </Flex>
  );
}
