import { Provider as StoreProvider } from 'react-redux';
import { store } from 'app/store/store';

export const withStore = (component:()=> React.ReactNode) => () =>{
    return (
        <StoreProvider store={store}>
            {component()}
        </StoreProvider>
    )
}