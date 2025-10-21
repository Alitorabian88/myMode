import React from 'react';
import {Switch as RNSwitch, SwitchProps as RNSwitchProps, ViewStyle} from 'react-native';

export type SwitchSize = 'small' | 'medium' | 'large' | number; // number = direct scale value

export type SwitchProps = Omit<RNSwitchProps, 'style'> & {
    size?: SwitchSize;
    style?: ViewStyle | ViewStyle[];
};

const sizeToScale = (size?: SwitchSize) => {
    if (typeof size === 'number') return size;
    switch (size) {
        case 'small':
            return 1;
        case 'large':
            return 2;
        case 'medium':
        default:
            return 1.5;
    }
};

export const UISwitch: React.FC<SwitchProps> = ({size = 'medium', style, ...rest}) => {
    const scale = sizeToScale(size);
    const transformStyle = {transform: [{scaleX: scale}, {scaleY: scale}]} as const;

    return (
        <RNSwitch
            {...rest}
            style={[transformStyle, style]}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        />
    );
};