import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface SpacerProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xlg';
  style?: ViewStyle;
  line?: boolean;
}

const Spacer: React.FC<SpacerProps> = ({ size = 'xs', style, line = false }) => {
  const sizes = {
    xs: 4,
    s: 8,
    m: 15,
    l: 25,
    xlg: 64,
  };

  const spacerStyle: ViewStyle = {
    height: sizes[size],
    justifyContent: 'center',
  };

  return (
    <View style={[spacerStyle, style]}>
      {line ? <View style={styles.line} /> : null}
    </View>
  );
};

export default Spacer;

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#bbb',
  },
});