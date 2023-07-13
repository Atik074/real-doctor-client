

const OrderRow = ({order ,handleDelete, handleUpdate }) => {
    const {_id , displayName ,serviceName,img , email, price ,status} = order 

 
    return (
       <tr>
        <th>
          <label>
          <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
             <div className="avatar">
              <div className="mask mask-squircle w-full h-12">
                  <img className="w" src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div> 
             
            <div>
              <div className="font-semibold text-xl ml-2">{displayName}</div>
              <div className="opacity-50 text-lg">{email}</div>
            </div>
          </div>
        </td>
        <td className="text-[18px]">
        {serviceName}
        
        </td>
        <td className="text-[18px]">{price}</td>
        <th>
         { status === 'confirm'  ?  <span>Confirmed</span> 
         :
        <button onClick={()=>{handleUpdate(_id)}} className="btn btn-neutral "> Please Confirm</button>}
        </th>
      </tr> 
    );
};

export default OrderRow;