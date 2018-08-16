import React from 'react'
import {connect} from 'react-redux'

import {addListItem, clearList, removeListItem, setListActive} from '../../Store/Actions/lists'

class Lists extends React.Component {
    handleButtonClick = () => {
        this.props.addItem({one: 1, two: 2})
    }

    handleButtonClickCreate = () => {
        const setActive = this.props.activeList === 'test' ? 'bob' : 'test'
        this.props.setActive(setActive)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleButtonClick}>Add to {this.props.activeList}</button>
                <button onClick={this.handleButtonClickCreate}>Switch to {this.props.activeList === 'test' ? 'bob' : 'test'}</button>
                <ul>
                {this.props.list
                    ? this.props.list.map((item, index) => {
                        return (
                            <li key={'item' + index}>
                                {'{'}
                                    {Object.keys(item).map((key, index) => {
                                        return <span key={key + index}>{key}: {item[key]},{' '}</span>
                                    })}
                                {'}'}
                            </li>
                        )
                    })
                    : null
                }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeList: state.lists.activeList,
        list: state.lists[state.lists.activeList]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItem: (item, listName = '') => dispatch(addListItem(item, listName)),
        removeItem: (item, listName = '') => dispatch(removeListItem(item, listName)),
        clearList: (listName = '') => dispatch(clearList(listName)),
        setActive: (listName = '') => dispatch(setListActive(listName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
