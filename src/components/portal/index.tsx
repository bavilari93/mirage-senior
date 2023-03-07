// @flow

import ReactDom from 'react-dom'
import * as React from 'react';
import { Modal } from '../modal/modal';


export function Portal({portalId, component}:{portalId:string, component:JSX.Element}) {

  return (
    <>
      {ReactDom.createPortal(component, (document as any).getElementById(portalId))}
    </>
  );
};
  