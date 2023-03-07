/* Common slice
   Manage the error and success state of the user flows in the app
*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  CommonStateModel, 
} from 'models/redux';

export const initialState: CommonStateModel = {
    //modal
    showModal: false,
    showNav:false,
    modalType:'generic',
    modalData:{
      messageTitle:'',
      message:'',
      displayButton:false,
      displayRedirectButton:false,
      displayCloseButton: false,
      displayCancelButton: false,
      displayConfirmButton:false,
      displayContinueButton: false,
      internalRedirect:false,
      redirectLink:'',
    } 
  };

const commonSlice = createSlice({
  name: 'commonReducer',
  initialState,
  reducers: {
    promptModal: (state, action: PayloadAction<CommonStateModel>) => {
      const {modalData, modalType='generic'} = action.payload
      state.modalData = modalData
      state.showModal = true;
      state.modalType = modalType;
    },
    hideModal: (state) => {
      state.showModal = false;
      state.modalType ='generic';
    },
    handleNavState:(state) =>{
      state.showNav = !state.showNav;
    },
  }
})

export const { 
  promptModal, 
  hideModal,
  handleNavState,
} = commonSlice.actions;

export default commonSlice.reducer;
