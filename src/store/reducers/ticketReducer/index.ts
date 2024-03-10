import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TicketType } from '../../../shared/types/TicketType';

interface TicketState {
  tickets: TicketType[];
  ticketById?: TicketType;
}

const initialState: TicketState = {
  tickets: [],
  ticketById: undefined,
};

export const ticketSlice = createSlice({
  name: 'tickerReducer',
  initialState,
  reducers: {
    setTicketsAction: (state, action: PayloadAction<TicketType[]>) => {
      state.tickets = action.payload;
    },
    setTicketByIdAction: (state, action: PayloadAction<TicketType>) => {
      state.ticketById = action.payload;
    },
  },
});

export const { setTicketsAction, setTicketByIdAction } = ticketSlice.actions;

export default ticketSlice.reducer;
