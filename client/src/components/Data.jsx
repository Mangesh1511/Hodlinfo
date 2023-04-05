import React from 'react'
import { ListGroup, ListGroupItem,Row,Col,Table, Container } from 'react-bootstrap'
import { useEffect,useState} from 'react'
import axios from 'axios'
function Data() {
    
        const [Prod,setProd]=useState([]);
        const [cnt,setCnt]=useState(0);
        const feedData=async()=>{
            const data=await axios.get("/getdata");
            console.log('Response received is: ',data.data);
            setProd(data.data);
            console.log('Updated data is: ',data.data);
        };
      
        
        useEffect(()=>{
            if(Prod.length===0 && Prod.length!=undefined)feedData();
           
            
              setTimeout(function(){
                window.location.reload();
             }, 60000);
        },[])

        
        console.log(Prod);
   
  return (
    <div className='data-record'>
       {cnt}
        <Table>
                <thead>
                    <tr>
                    <th><strong>#</strong> </th>
                    <th><strong>Name</strong></th>
                    <th><strong>Last</strong></th>
                    <th><strong>Buy/Sell Price</strong></th>
                    <th><strong>Volume</strong></th>
                    <th><strong>Base_Unit</strong></th>

                    </tr>
                </thead>
                <tbody>
            
        {
            Prod.map((item,ind)=>(
                <tr>
                <td>{ind}</td>
                <td>{item.name}</td>
                <td>&#8377;{item.last}</td>
                <td>&#8377;{Math.round(item.buy,2)}{' / '}&#8377;{Math.round(item.sell,2)}</td>
                <td>{item.volume}</td>
                <td>{item.base_unit}</td>
                </tr>
            ))
        }
        </tbody>
        </Table>
    </div>
  )
              
      
      
  
}

export default Data
