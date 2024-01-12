import { toggleLoginPage, toggleRegisterPage } from "../../actions/actions";

export function* handleToggleLoginPage() {
  toggleLoginPage();
}

export function* handleToggleRegisterPage() {
  toggleRegisterPage();
}
