import { HStack } from '@workday/canvas-kit-react/layout';
import { colors } from '@workday/canvas-kit-react/tokens';
import Logo from 'components/Logo';

export default function Header() {
  return (
    <HStack
      shouldWrapChildren
      spacing='s'
      backgroundColor={colors.licorice600}
      border='2px solid'
      borderBottomColor={colors.licorice100}
      padding='s'
    >
      <Logo width={190} />
    </HStack>
  );
}
