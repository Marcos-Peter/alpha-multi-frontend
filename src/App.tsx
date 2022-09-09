import { SnackbarProvider } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';

import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/routes';
import { UserDataProvider } from './providers/UserDataProvider';

const useStyles = makeStyles(() => ({
  success: { backgroundColor: '#5CB29A', color: '#f7f7f7' },
  warning: { backgroundColor: '#D7B333', color: '#f7f7f7' },
  error: { backgroundColor: '#DB8080', color: '#f7f7f7' },
  info: { backgroundColor: '#505050', color: '#f7f7f7' },
}));

/**
 * Archive: src/App.tsx
 *
 * Description: Main component
 *
 * Data: 2022/08/15
 *
 * Author: Bruno
 *
 * Collaborators:
 */

export const App = () => {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        hideIconVariant
        preventDuplicate
        autoHideDuration={3000}
        classes={{
          variantSuccess: classes.success,
          variantError: classes.error,
          variantWarning: classes.warning,
          variantInfo: classes.info,
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
      >
        <UserDataProvider>
          <Router />
        </UserDataProvider>
      </SnackbarProvider>
    </BrowserRouter>
  );
};
