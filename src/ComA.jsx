import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ComA=()=>{
    const [num,setnum]=useState();
    const [name,setname]=useState();
    const [moves,setmove]=useState();
    useEffect(()=>{
        async function getData(){
            const res=await axios.get( `https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
            setname(res.data.name);
            setmove(res.data.moves.length);
        }
        getData();
    });
    return(
        <>
        <h1>You choose {num} value</h1>
        <h1>my name is {name}</h1>
        <h1>i have{moves}</h1>
            <select value={num} onChange={(event)=>{
                setnum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="2">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    );
};
export default ComA;