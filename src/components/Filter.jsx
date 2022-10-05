import PropTypes from 'prop-types';
import { LabelText, Input } from './PhonebookStyled';

export default function Filter({ filter, handleChange }) {
    return (
        <label>
            <LabelText>Find contacts by name:</LabelText>
            <Input type="text" name="filter" value={filter} onChange={handleChange}/>
        </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}
