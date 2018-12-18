import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SplitPane from 'react-split-pane';

import styles from './styles/Drawer.module.css';

export default function Drawer({ isOpen, onToggle }) {
    return (
        <div
            className={styles.wrapper}
            style={{
                width: isOpen ? 400 : 0,
            }}
        >
            <SplitPane
                defaultSize="50%"
                split="vertical"
                resizerStyle={{ backgroundColor: 'grey', width: 5, cursor: 'col-resize' }}
            >
                <div>foo</div>
                <div>bar</div>
            </SplitPane>
            <button onClick={onToggle} className={styles.openButton}>
                {isOpen ? 'Close' : 'Open'}
            </button>
        </div>
    );
}

Drawer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};
