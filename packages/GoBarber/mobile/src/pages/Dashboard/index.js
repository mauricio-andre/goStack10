import React from 'react';
import { Text } from 'react-native';

import Background from '~/components/Background';

import BottomTabs from '~/components/BottomTabs';

export default function Dashboard() {
  return (
    <Background>
      <Text>Dashboard</Text>
      <BottomTabs />
    </Background>
  );
}
