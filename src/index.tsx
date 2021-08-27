import React, { ReactElement } from 'react';
import { AppBootStrap } from '@components';
import Navigator from '@config/navigator';

export default function App(): ReactElement {
  
  return (
    <AppBootStrap>
      <Navigator />
    </AppBootStrap>
  );
}
