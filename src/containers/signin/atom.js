import { atom } from "recoil";

const initAuthState = {
    provider: null,
    id: null,
    email: null, 
}
export const authState = atom({
    key: "authState",
    default: initAuthState,
});

export const modalStateAtom = atom({
    key: 'modalStateAtom',
    default: false,
});