import { addEmployeePage, editEmployeePage } from "../../actions/actions";

export function addEmployeePageWorkerSaga() {
  addEmployeePage();
}

export function editEmployeePageWorkerSaga(action: any) {
  editEmployeePage(action.payload);
}
