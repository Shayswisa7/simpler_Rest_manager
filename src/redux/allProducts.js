import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const postAllProducts = createAsyncThunk(
  'allProductsReducer/postAllProducts',
  async () => {
    try {
      const item = await axios.post(
        'http://localhost:3001/RestDataFormats_Obj',
        {
          type: 'AllProductsOBJ',
        }
      );
      console.log(item.data);
      return item.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const allProductsSlice = createSlice({
  name: 'allProductsReducer',
  initialState: {
    obj: {},
    status: null,
  },
  reducers: {
    setObj: (state, action) => {
      state.obj = action.payload;
    },
    setValues: (state, action) => {
      state.obj[action.payload['key']] = action.payload['value'];
    },
  },
  extraReducers: {
    [postAllProducts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [postAllProducts.fulfilled]: (state, action) => {
      state.obj = action.payload.obj;
      state.status = 'success';
    },
    [postAllProducts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { setObj, setValues } = allProductsSlice.actions;
export default allProductsSlice.reducer;
