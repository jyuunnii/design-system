import React from 'react';
import { Story, Meta } from '@storybook/react';

import Component from './Component';

export default {
    title: 'Component',
    components: Component,
} as Meta;

const ComponentBase: Story = (args) => {
    return <Component {...args} />;
}

export const Base = ComponentBase.bind({});