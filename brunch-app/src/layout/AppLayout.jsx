import { Outlet} from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
