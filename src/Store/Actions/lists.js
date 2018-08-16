export const LIST_ADD_ITEM = 'LIST_ADD_ITEM'
export const LIST_REMOVE_ITEM = 'LIST_REMOVE_ITEM'
export const LIST_CLEAR = 'LIST_CLEAR'
export const LIST_SET_ACTIVE = 'LIST_SET_ACTIVE'
export const LIST_DELETE = 'LIST_DELETE'

export function addListItem(item, listName = '') {
    return {
        type: LIST_ADD_ITEM,
        listName,
        item
    }
}

export function removeListItem(item, listName = '') {
    return {
        type: LIST_REMOVE_ITEM,
        listName,
        item
    }
}

export function clearList(listName = '') {
    return {
        type: LIST_CLEAR,
        listName
    }
}

export function setListActive(listName) {
    return {
        type: LIST_SET_ACTIVE,
        listName
    }
}

export function deleteList(listName) {
    return {
        type: LIST_DELETE,
        listName
    }
}
