import { PageRoutes } from "./routes";
import { UserProvider } from "./contexts/UserContext";

export const App = () => {
  return (
    <>
      <UserProvider>
        <PageRoutes />
      </UserProvider>
    </>
  );
};
