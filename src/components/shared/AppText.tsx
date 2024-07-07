import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import Font from '../../themes/Font';
import { fontScale } from '../../themes/Scale';
import Colors from '../../themes/Colors';

interface AppTextProps extends TextProps {
  size?: number;
  font?: 'bold' | 'medium' | 'light' | 'regular';
  align?: 'left' | 'center' | 'right' | 'justify';
  color?: string;
  style?: TextStyle;
}

const AppText: React.FC<AppTextProps> = ({
  size = 14,
  font = 'regular',
  align = 'left',
  color = Colors.black,
  style,
  children,
  ...rest
}) => {
  const mapFontToFontProps: { [key: string]: TextStyle } = {
    bold: { ...Font.BOLD, fontWeight: 'bold' },
    medium: { ...Font.MEDIUM, fontWeight: '500' },
    light: { ...Font.LIGHT, fontWeight: '300' },
    regular: { ...Font.REGULAR, fontWeight: 'normal' },
  };

  const fontProps: TextStyle = mapFontToFontProps[font] || mapFontToFontProps['regular'];

  const textStyle: TextStyle = {
    fontSize: fontScale(size),
    textAlign: align,
    color,
    ...fontProps,
  };

  return (
    <Text style={[textStyle, style, { marginTop: 0 }]} {...rest}>
      {children}
    </Text>
  );
};

export default AppText;