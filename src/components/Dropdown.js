import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Dropdown,
    FormControl,
} from 'react-bootstrap';

const DropdownButton = React.forwardRef(({ children, onClick }, ref) => (
    <Button
        ref={ref}
        style={{
            width: '100%',
            marginBottom: 10,
        }}
        onClick={onClick}>
        {children} &#x25bc;
    </Button>
));

const DropdownMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    placeholder="Search"
                    className="mx-3 my-2 w-auto"
                    onChange={({ target: { value } }) => setValue(value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(child => {
                        const search = value.toLowerCase();
                        const elementValue = child.props.children.toLowerCase();
                        return !value || elementValue.includes(search);
                    })}
                </ul>
            </div>
        );
    },
);

const DropdownSearch = ({ buttonText, items, disabled, onClick }) => (
    <Dropdown>
        <Dropdown.Toggle
            as={DropdownButton}
            id="dropdown-custom-components">
            {buttonText}
        </Dropdown.Toggle>
        <Dropdown.Menu as={DropdownMenu} disabled={disabled}>
            {items?.map((item, index) =>
                <Dropdown.Item
                    key={item.name}
                    onClick={() => onClick(item)}
                    disabled={disabled}
                    eventKey={`${index + 1}`}>
                    {item.name}
                </Dropdown.Item>
            )}
        </Dropdown.Menu>
    </Dropdown>
);

DropdownSearch.propTypes = {
    buttonText: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}

DropdownSearch.defaultProps = {
    buttonText: 'Select item',
    items: [],
    onClick: () => { },
    disabled: false,
}

export default DropdownSearch;
