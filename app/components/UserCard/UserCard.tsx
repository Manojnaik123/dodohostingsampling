'use client';
import React from 'react';
import AddToCart from '../AddToCart';
import styles from './UserCard.module.css';

const UserCard = () => {
    return (
        <div className={styles.card}>
            <AddToCart/>
        </div>
    )
}

export default UserCard