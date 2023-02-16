import { Provider as StoreProvider } from 'react-redux';
import { store } from 'app/store';

export const withStore = (Component: () => JSX.Element) => () =>{
    
    return (
        <StoreProvider store={store}>
            <Component/>
        </StoreProvider>
    )
}