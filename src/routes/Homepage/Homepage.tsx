import { Box, Flex } from "@workday/canvas-kit-react/layout";
import { colors } from "@workday/canvas-kit-react/tokens";
import { Heading, Text } from "@workday/canvas-kit-react/text";
import { PrimaryButton } from "@workday/canvas-kit-react/button";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import landingAnimation from "assets/lottie-landing.json";
import Logo from "components/Logo";

export default function Homepage() {
  return (
    <Flex
      height="100vh"
      maxHeight="100vh"
      background={colors.frenchVanilla100}
      flexDirection="column"
    >
      <Box padding="xl">
        <Logo width="200px" />
      </Box>
      <div className="landing-page-container">
        <Box>
          <Heading
            as="h1"
            size="large"
            fontSize="3rem"
            marginBottom="s"
            marginRight="s"
          >
            Learn Latest Web Technologies
          </Heading>
          <Text>
            With interactive lessons, quizzes, and projects, you&apos;ll learn
            how to build websites and apps.
          </Text>
          <Flex marginTop="m">
            <Link
              to="/courses"
              style={{ textDecoration: "none", color: "black" }}
            >
              <PrimaryButton>Get Started</PrimaryButton>
            </Link>
          </Flex>
        </Box>
        <Box>
          <Lottie
            animationData={landingAnimation}
            className="landing-page-animation"
          />
        </Box>
      </div>
      <div className="main wavey"></div>
    </Flex>
  );
}
