import { AppLayoutWebComponent } from "./Components/AppLayoutWebComponent";
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
      <AppLayoutWebComponent />
    </>
  );
};

export default App;
