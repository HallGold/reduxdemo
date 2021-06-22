import { ADD_PERSON } from "../contsant";

export const createAddPersonAction = (personOBJ) => ({ type: ADD_PERSON, data: personOBJ });
