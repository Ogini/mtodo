import * as actionType from '../Actions/lists'
import { REHYDRATE } from 'redux-persist'

const INITIAL_STATE = {
    'test': [],
    'activeList': 'test'
}

const listsReducer = (state = INITIAL_STATE, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    const getListName = (listName) => {
        if (listName === '') {
            listName = newState.activeList
        }
        if (!newState[listName]) {
            newState[listName] = []
        }
        return listName
    }
    let listName = ''
    switch (action.type) {
        case REHYDRATE:
            newState = JSON.parse(JSON.stringify(action.payload.lists))
            break
        case actionType.LIST_ADD_ITEM:
            listName = getListName(action.listName)
            newState[listName].push(action.item)
            break
        case actionType.LIST_REMOVE_ITEM:
            listName = getListName(action.listName)
            newState[listName] = newState[listName].slice(action.item)
            break
        case actionType.LIST_CLEAR:
            listName = getListName(action.listName)
            newState[listName] = []
            break
        case actionType.LIST_SET_ACTIVE:
            listName = getListName(action.listName)
            newState.activeList = listName
            break
        case actionType.LIST_DELETE:
            listName = getListName(action.listName)
            delete newState[listName]
            if (newState.activeList === listName) {
                newState.activeList = 'test'
                if (!newState['test']) {
                    newState['test'] = []
                }
            }
            break
    }

    return newState
}

export default listsReducer
