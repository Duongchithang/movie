import {createSlice} from '@reduxjs/toolkit';
const UserSlice = createSlice({
    name : 'state',
    initialState:{
     MenuList : ['Home','Movies','TV Series']
      }, 
    reducers:{

    }
});
export default UserSlice.reducer;