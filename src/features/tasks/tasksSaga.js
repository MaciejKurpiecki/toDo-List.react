import { call, put, takeLatest, delay, takeEvery, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, fetchExampleTasksSucces, fetchExampleTasksError } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSucces(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
        yield put(fetchExampleTasksError());
    }
}
function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler)
    yield takeEvery("*", saveTasksInLocalStorageHandler)
}