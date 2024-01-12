'use client';
import React from 'react';

const EncodeEmail = () => {
    const email = '' //place email here
    const b = Buffer.from(email).toString('base64');
    let res = [];
    for (let i = 0; i < b.length; i++) {
        res[i] = b.charCodeAt(i).toString();
    } 
    return res.join('-')
}

export default EncodeEmail