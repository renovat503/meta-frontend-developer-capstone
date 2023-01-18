import * as React from "react";
import { Center, Group, Text } from "@mantine/core";
import { IconAlertTriangle } from "@tabler/icons";
import { colors } from "src/theme";

interface DisplayerProps {
  error?: boolean;
  value: string | null | undefined;
  extraValue?: string;
  icon?: React.ReactNode;
}

const Displayer: React.FC<DisplayerProps> = ({
  error,
  value,
  extraValue,
  icon,
}) => {
  return (
    <>
      <Center>
        <IconAlertTriangle
          size={20}
          color={error ? colors.pink : colors.primary}
        />
      </Center>
      <Group noWrap>
        {icon}
        <Text size="lg" fw={500} c={error ? colors.pink : colors.light}>
          {value ? value : extraValue}
        </Text>
      </Group>
    </>
  );
};

export default Displayer;
