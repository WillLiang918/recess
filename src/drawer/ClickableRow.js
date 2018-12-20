import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './styles/ClickableRow.module.css';

export default function ClickableRow({ children, ActionIcon, onClickAction, onClick, isSelected }) {
    return (
        <div
            className={classNames(styles.row, { [styles.isSelected]: isSelected })}
            onClick={onClick}
        >
            <div className={styles.label}>{children}</div>
            {!!ActionIcon && (
                <div
                    className={styles.action}
                    onClick={e => {
                        e.stopPropagation();
                        onClickAction();
                    }}
                >
                    <ActionIcon className={styles.icon} />
                </div>
            )}
        </div>
    );
}

ClickableRow.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickAction: PropTypes.func,
    ActionIcon: PropTypes.object,
    isSelected: PropTypes.bool.isRequired,
};
