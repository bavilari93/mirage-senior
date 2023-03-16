export type CommonStateModel = {
    modalType?: string; 
    showModal?: boolean;
    viewedInteractive?:boolean,
    viewedStatic?:boolean,
    showNav?:boolean;
    modalData: ModalPayload;
  };


  export interface ModalPayload {
    messageTitle?: string;
    message?: string;
    displayButton?:boolean;
    displayCloseButton?: boolean;
    displayCancelButton?: boolean;
    displayRedirectButton?: boolean;
    displayConfirmButton?: boolean;
    displayContinueButton?: boolean;
    displayRestoreButton?: boolean;
    internalRedirect?: boolean;
    redirectLink?: string;
  }