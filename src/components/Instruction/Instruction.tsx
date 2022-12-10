import { Box, Flex } from '@workday/canvas-kit-react/layout';
import { colors } from '@workday/canvas-kit-react/tokens';
import { Text, Heading } from '@workday/canvas-kit-react/text';
import { SystemIcon } from '@workday/canvas-kit-react/icon';
import { bookOpenIcon } from '@workday/canvas-system-icons-web';

// TODO: GET ITEM FROM API
export default function Instruction() {
  return (
    <>
      <Flex
        backgroundColor={colors.frenchVanilla200}
        padding='xs'
        alignItems='center'
      >
        <SystemIcon icon={bookOpenIcon} as='p' marginRight='xxs' />
        <Heading as='h6' size='small' variant='hint'>
          What is Codemasters
        </Heading>
      </Flex>
      <Box padding='m' height='100%' overflowY='scroll'>
        <Text as='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
          pariatur earum quam excepturi fugit veniam dolorem ex omnis
          exercitationem consequatur aut, consectetur eos labore quaerat
          maiores, assumenda quod voluptate!
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
          pariatur earum quam excepturi fugit veniam dolorem ex omnis
          exercitationem consequatur aut, consectetur eos labore quaerat
          maiores, assumenda quod voluptate!
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
          pariatur earum quam excepturi fugit veniam dolorem ex omnis
          exercitationem consequatur aut, consectetur eos labore quaerat
          maiores, assumenda quod voluptate!
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
          pariatur earum quam excepturi fugit veniam dolorem ex omnis
          exercitationem consequatur aut, consectetur eos labore quaerat
          maiores, assumenda quod voluptate!
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
          pariatur earum quam excepturi fugit veniam dolorem ex omnis
          exercitationem consequatur aut, consectetur eos labore quaerat
          maiores, assumenda quod voluptate!
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
          pariatur earum quam excepturi fugit veniam dolorem ex omnis
          exercitationem consequatur aut, consectetur eos labore quaerat
          maiores, assumenda quod voluptate!
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
          pariatur earum quam excepturi fugit veniam dolorem ex omnis
          exercitationem consequatur aut, consectetur eos labore quaerat
          maiores, assumenda quod voluptate!
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
          pariatur earum quam excepturi fugit veniam dolorem ex omnis
          exercitationem consequatur aut, consectetur eos labore quaerat
          maiores, assumenda quod voluptate!
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
          pariatur earum quam excepturi fugit veniam dolorem ex omnis
          exercitationem consequatur aut, consectetur eos labore quaerat
          maiores, assumenda quod voluptate!
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
          pariatur earum quam excepturi fugit veniam dolorem ex omnis
          exercitationem consequatur aut, consectetur eos labore quaerat
          maiores, assumenda quod voluptate!
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
          pariatur earum quam excepturi fugit veniam dolorem ex omnis
          exercitationem consequatur aut, consectetur eos labore quaerat
          maiores, assumenda quod voluptate!
        </Text>
        <Text as='p'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
          pariatur earum quam excepturi fugit veniam dolorem ex omnis
          exercitationem consequatur aut, consectetur eos labore quaerat
          maiores, assumenda quod voluptate!
        </Text>
      </Box>
    </>
  );
}
