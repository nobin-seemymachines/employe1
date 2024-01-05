import { Link } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { toggleLoginPage, toggleRegisterPage } from "../redux/actions/actions";

function Home() {
  const dispatch = useAppDispatch();
  const isLoginPage = useAppSelector((state: RootState) => state.page.isLoginPage)

  const handleButtonClick = () => {
    if (isLoginPage) {
      dispatch(toggleRegisterPage())
    } else {
      dispatch(toggleLoginPage())
    }
  }
  return (
    <div className="info">
      <h2>information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        provident numquam, amet maiores natus ratione cupiditate nisi minus
        voluptas expedita consequuntur.
      </p>
      <p>
        Commodi officia autem neque laboriosam! Sequi quisquam magni veritatis
        esse vel inventore sint fugit possimus.
      </p>
      <div className="change-btn" onClick={handleButtonClick}>
        <Link to={isLoginPage ? "/register" : "/"}>
          <button>{isLoginPage ? "Create An Account" : "Have An Account"}</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;


