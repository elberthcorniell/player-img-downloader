import { handleFileDownload } from '../utils';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Download = ({ style, url, children }) => {
    const [loading, setLoading] = useState()
    return < Button
        variant='success'
        style={style}
        onClick={async () => {
            setLoading(true);
            await handleFileDownload(url);
            setLoading(false);
        }}
    >
        {loading ? <img src="https://inverte.io/images/spinner.gif" alt="loader" height="30px" /> : children}
    </Button >
}

Download.propTypes = {
    style: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])),
    url: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
}

Download.defaultProps = {
    style: {},
    url: '',
    children: <></>,
}

export default Download;
