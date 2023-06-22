import { PageRoutes } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { FilterProvider } from "./contexts/FilterContext";

export const App = () => {
  return (
    <>
      <UserProvider>
        <FilterProvider>
          <PageRoutes />
        </FilterProvider>
      </UserProvider>
    </>
  );
};
