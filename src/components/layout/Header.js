import React from 'react';
import { Box, Text, SafeAreaView, StatusBar } from '@gluestack-ui/themed';

const Header = () => {
  return (
    <SafeAreaView>
      <Box bg="#2c3e50" alignItems="center" justifyContent="center" py={5}>
        <Text color="#fff" fontSize={20} fontWeight="bold">
          Movie App
        </Text>
      </Box>
    </SafeAreaView>
  );
};

export default Header;