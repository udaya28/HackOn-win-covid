import React, { Suspense,useState } from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import UserAdminRouter from './routes/UserAdmin';
import PublicRouter from './routes/Public';
import Header from './main/components/Header/Header';
import { ToastProvider } from 'react-toast-notifications';
const SuperAdminRouter = React.lazy(() => import('./routes/SuperAdmin'));
function App() {
  const [test, setTest] = useState(false)
  return (
    <HashRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <ToastProvider placement="bottom-right">
        <Switch>
          {/* Super Admin  Routes */}
          <Route path='/super-admin'>
            <SuperAdminRouter />
          </Route>

          {/* User Admin  Routes */}
          <Route path='/user'>
            <Header />
            <UserAdminRouter />
          </Route>

          {/* Public Routes */}
          <Route path='/'>
            <Header setTest={setTest} test={test} />
            <PublicRouter setTest={setTest} />
          </Route>

        </Switch>
      </ToastProvider>
    </BrowserRouter>
    </Suspense>
    </HashRouter>
  );
}

export default App;
