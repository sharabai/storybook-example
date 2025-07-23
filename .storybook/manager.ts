import { addons } from 'storybook/manager-api';
import { themes } from 'storybook/theming';

addons.setConfig({
  theme: {
    ...themes.normal,
    brandTitle: 'Software Mansion',
    brandImage: 'https://swmansion.com/assets/logo.svg',
  },
});