import compose from 'compose-function';
import { withAuth } from './with-auth';
import { withRouter } from './with-router';
import { withStore } from './with-store';

export const withProviders = compose(withStore,withRouter,withAuth);