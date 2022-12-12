import { Box, Flex } from "@workday/canvas-kit-react/layout";
import { colors, type, space } from "@workday/canvas-kit-react/tokens";
import { Text, Heading } from "@workday/canvas-kit-react/text";
import { Skeleton } from "@workday/canvas-kit-react/skeleton";
import { SystemIcon } from "@workday/canvas-kit-react/icon";
import { bookOpenIcon } from "@workday/canvas-system-icons-web";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { useCodemastersContext } from "context";
import useAxios from "hooks/useAxios";
import ErrorSVG from "assets/error.svg";
import type { SAMPLE_LESSON_RESPONSE } from "types";
import { Fragment } from "react";

export default function Instruction() {
  const { taskFinished } = useCodemastersContext();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { loading, error, data } = useAxios("/api/lessons/sample", "GET");
  const responses = data as SAMPLE_LESSON_RESPONSE[] | undefined;

  if (loading) {
    return (
      <Box height="100%" backgroundColor={colors.frenchVanilla100} padding="m">
        <Skeleton.Header />
        <Skeleton.Text />
        <Skeleton.Text />
        <Skeleton.Text />
        <Skeleton.Header />
        <Skeleton.Text />
        <Skeleton.Text />
        <Skeleton.Text />
        <Skeleton.Header />
        <Skeleton.Text />
        <Skeleton.Text />
        <Skeleton.Text />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        height="100%"
        backgroundColor={colors.frenchVanilla100}
        padding="m"
        paddingTop="xxxl"
      >
        <img src={ErrorSVG} alt="Error" style={{ width: "100%" }} />
        <Text textAlign="center" display="block">
          Couldn&apos;t load the lesson. Please try again later.
        </Text>
      </Box>
    );
  }

  console.log(responses);

  return (
    <Box
      backgroundColor={colors.frenchVanilla100}
      height="100%"
      overflowY="scroll"
    >
      {responses &&
        responses.map((response) => (
          <Fragment key={`${response.title}-${new Date().getTime()}`}>
            <Flex
              backgroundColor={colors.soap200}
              padding="xs"
              alignItems="center"
            >
              <SystemIcon icon={bookOpenIcon} as="p" marginRight="xxs" />
              <Heading
                as="h2"
                color={colors.blackPepper300}
                size="small"
                fontSize={type.levels.body.large.fontSize}
              >
                {response.title}
              </Heading>
            </Flex>
            {response.type === "intro" && (
              <Box padding="m">
                {response.content.map((content) => (
                  <Text
                    key={`${content}-${new Date().getTime()}`}
                    as="p"
                    marginBottom={space.s}
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                ))}
              </Box>
            )}
            {response.type === "instruction" && (
              <Box padding="m">
                {response.content.map((content) => (
                  <Fragment
                    key={`${content.instruction}-${new Date().getTime()}`}
                  >
                    <Flex marginBottom={space.xs}>
                      <Flex.Item marginRight="xs">
                        {taskFinished >= content.stage ? (
                          <ImCheckboxChecked />
                        ) : (
                          <ImCheckboxUnchecked />
                        )}
                      </Flex.Item>
                      <Flex.Item>
                        <Text
                          dangerouslySetInnerHTML={{
                            __html: content.instruction,
                          }}
                        />
                      </Flex.Item>
                    </Flex>
                  </Fragment>
                ))}
              </Box>
            )}
          </Fragment>
        ))}
    </Box>
  );
}
