'use client';
import React from 'react';

const DecodeEmail = () => {
    const email =
    "97-109-57-108-81-71-86-110-98-71-108-117-97-109-57-105-99-121-53-106-98-50-48-61";
      const ascii = email.split('-')
      const ascii2 = JSON.parse("[" + ascii + "]")
    let res = String.fromCharCode(...ascii2)
    let mailer = "mailto:" + atob(res) + "?subject=Resume for Eglin Jobs&body=Your%20full%20name%3A%0AJob%20numbers%3A%0APersonal%20email%20address%3A%0APersonal%20phone%20number%3A%0A%0A***Please%20attach%20your%20resume%20to%20this%20email.***"
    return mailer.toString()
  };

export default DecodeEmail

//https://jackchilds.tech/posts/reducing_spam_from_mailto_links