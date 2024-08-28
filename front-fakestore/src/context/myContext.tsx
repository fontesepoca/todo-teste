import MyContextType from 'fakestore/@types/myContext';
import { createContext } from 'react';

const MyContext = createContext<MyContextType | undefined>(undefined);

export default MyContext;