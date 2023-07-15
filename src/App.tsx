import { AppLayout } from "./Components/AppLayout";
import { AppRoutes } from "./Components/AppRoutes";
import { ToastContainer } from "./Components/ToastNotification";

const App = () => {
  return (
    <>
      <ToastContainer
        closeButton={false}
        newestOnTop={true}
        pauseOnFocusLoss={true}
        pauseOnHover={true}
      />
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </>
  );
};

export default App;
