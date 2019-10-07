import React from 'react';
import { Header } from './Header.styles';
import { Icon } from 'semantic-ui-react';
import Search from '../search/Search.component';

export default props => (
  <div>
    <Header>
      TCMagic
      <Search></Search>
      <Icon name="user circle" size="large"></Icon>
    </Header>
  </div>
);
