import PropTypes from 'prop-types';

import { ListItem, DeleteBtn, List } from './PhonebookStyled';

export default function ContactList({ items, removeContact }) {
    const elements = items.map(({ name, number, id }) => {
        return (
            <ListItem key={id}>{name}: {number}
                <DeleteBtn type="button" onClick={() => removeContact(id)}>x</DeleteBtn>
            </ListItem>
        )
    })

    if (!items.length) {
        return (
            <p><b>Your contacts list is empty</b></p>
        )
    } else {
        return (
            <List>{elements}</List>
        )
    }
}

ContactList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    )
}