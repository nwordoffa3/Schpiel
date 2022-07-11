import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React from 'react';
import {useState} from 'react';


class Hashtable extends React.Component {
   constructor(props) {
    this.table = new Array(256);
    this.size = 0;
   }

   _hash (key){
    let hashIdx = 0;
    for (let i = 0; i < key.length; i++) {
        hashIdx += key.charCodeAt(i);
   }
   return hashIdx;
}

    set(key, value){   
    let idx =this._hash(key);
    if (this.table[idx] === undefined) {
        console.log("im undefined");
    }
   }

}

export default Hashtable