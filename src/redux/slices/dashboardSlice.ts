import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface Orders {
  total: number;
  upcoming: number;
  ongoing: number;
  completed: number;
}

interface Trips {
  total: number;
  upcoming: number;
  ongoing: number;
  completed: number;
}

interface Revenue {
  total: number;
  upcoming: number;
  ongoing: number;
  completed: number;
}

interface Expenses {
  total: number;
  freightCharge: number;
  driverCharge: number;
  otherCharges: number;
}

interface Highlight {
  income: number;
  expenses: number;
  completedActivities: string[];
  scheduledActivities: string[];
}

interface Alert {
  id: string;
  message: string;
  date: string;
}

interface DashboardState {
  orders: Orders;
  trips: Trips;
  revenue: Revenue;
  expenses: Expenses;
  highlights: Highlight;
  alerts: Alert[];
}

const initialState: DashboardState = {
  orders: { total: 123456, upcoming: 50, ongoing: 100, completed: 50 },
  trips: { total: 123456, upcoming: 50, ongoing: 100, completed: 50 },
  revenue: { total: 123456, upcoming: 50, ongoing: 100, completed: 50 },
  expenses: { total: 123456, freightCharge: 50, driverCharge: 100, otherCharges: 50 },
  highlights: { income: 100000, expenses: 50000, completedActivities: [], scheduledActivities: [] },
  alerts: [],
};

export const fetchDashboardData = createAsyncThunk('dashboard/fetchData', async () => {
  const response = await fetch('/api/dashboard');
  return response.json();
});

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setDashboardData(state, action: PayloadAction<Partial<DashboardState>>) {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDashboardData.fulfilled, (state, action: PayloadAction<DashboardState>) => {
      return { ...state, ...action.payload };
    });
  },
});

export const { setDashboardData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
