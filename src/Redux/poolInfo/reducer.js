import {
    ActionTypes
} from "../types";

const INITIAL_STATE = {
    totalUsers: 0,
    diamond: 0,
    doubleDiamond: 0,
    topPool: 0
};

const poolInfoReducer = (state = INITIAL_STATE, {
    type,
    payload
}) => {
    switch (type) {
        case ActionTypes.POOL_DETAIL:
            return {
                ...state,
                totalUsers: payload.totalUsers,
                    diamond: payload.diamond,
                    doubleDiamond: payload.doubleDiamond,
                    topPool: payload.topPool
            };
        default:
            return state;
    }
};
export default poolInfoReducer;