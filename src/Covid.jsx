import React, { useState,useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";



const Covid = () => {

    const [data, setData] = useState([]);
    //  useEffect(() => {

    //     async function  p(){
    //         const res=await axios.get('https://data.covid19india.org/data.json');
    //         console.log(res.data.statewise[0]);
    //         setData(res.data.statewise[0]);
    //     }
    //     p();
       
       
    // }, []);

    // const p=async ()=>{
        
    //         const res=await axios.get('https://api.covid19india.org/data.json');
    //         // const actualdata=await res.json();
    //         console.log(res.data.statewise[0]);
    //         setData(res.data.statewise[0]);

    // }
  
    useEffect(() => {

        async function   getCovidData(){
            const res=await axios.get('https://data.covid19india.org/data.json');
            console.log(res.data.statewise);
            setData(res.data.statewise);
        }
     
        getCovidData();
       
    }, []);
   
    // useEffect(()=>{
    //    p();
    // },[]);
    return (
        <>
         
        

  


      
         <div className="hh">
        
            <h2>Covid-19 INDIA</h2></div>
         














            <div className="container-fluid mt-5">
                <div className="main-heading">
                    {/* <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA </span>COVID-19</h1> */}
                    <div className="table-responsive">
                  
                   
                        <table className="table table-hover">
                            <thead className="thead-dark">

                                <tr>
                                    <th>State</th>
                                    <th>Confirmed</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                    <th>Active</th>
                                    <th>Updated</th>

                                </tr>

                            </thead>
                            <tbody>
                            
                        {data.map((cntry)=>{
                           const {ID,state,active,confirmed,deaths,recovered,lastupdatedtime,}=cntry


                           return(
                            <tr key={ID}>
                                    
                                    <th>{state}</th>
                                    <td>{confirmed}</td>
                                    <td>{recovered}</td>
                                    <td>{deaths}</td>
                                    <td>{active}</td>
                                    <td>{lastupdatedtime}</td>





                                </tr>


                           )

                        })}
                     </tbody>
                        </table>
                    </div>
                </div>
            </div>

              <footer>
                  <p>©️ 2021 Copyright: Made by HARSH</p>
              </footer>
        </>



    );
};
export default Covid;