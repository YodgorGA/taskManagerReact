import compose from 'compose-function';
import { withTheme } from './with-theme';
import { withAuth } from './with-auth';
import { withRouter } from './with-router';
import { withStore } from './with-store';

export const withProviders = compose(withTheme,withStore,withRouter,withAuth);