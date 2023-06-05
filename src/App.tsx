import { Button } from "./components/Button";
import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { mockCards } from "./mocks/cards";

export const App = () => {
  return (
    <>
      <Header />
      <div className="py-10 flex flex-col justify-center gap-8 items-center m-10">
        <div className="flex flex-col gap-3.5">
          <Button btnSize="btn-big" btnColor="btn-grey-1">
            Text Button
          </Button>
        </div>
        <div className="flex flex-col gap-4">
          <Button btnSize="btn-medium" btnColor="btn-brand-1">
            Text Button
          </Button>
        </div>
        <div>
          <Cards car={mockCards}></Cards>
        </div>
      </div>
    </>
  );
};
