import { addEmployeePage, editEmployeePage } from "../../actions/actions";

export function* addEmployeeWorkerSaga() {
  addEmployeePage();
}

export function* editEmployeeWorkerSaga(action: any) {
  editEmployeePage(action.payload);
}
