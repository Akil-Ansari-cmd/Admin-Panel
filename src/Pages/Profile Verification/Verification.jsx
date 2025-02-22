import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ProfileVerify } from '../../Component/Services/Profile Verification';

// const Verification = () => {
//     const [data, setData] = useState();
//     const PlanVerify = async () => {
//         const response = await ProfileVerify();
//         console.log("Verification..........", response?.data);
//         setData(response?.data?.data || []);  // Ensure data is always an array
//     };

//     useEffect(() => {
//         PlanVerify();
//     }, []);
//     return (
//         // <div>
//         //     <div className='border border-gray-300 rounded-md m-5'>
//         //         <div className='flex justify-between pt-5 px-7'>
//         //             {/* <div className='flex '>
//         //                     <div>Search:</div>
//         //                     <input className='border border-slate-400 outline-none ml-3 rounded-sm h-6 my-0.5' type='text' />
//         //                 </div> */}
//         //             {/* <div><Head2 /></div> */}
//         //         </div>

//         //         <div className='border border-gray-300 my-5 mx-7 rounded-sm overflow-y-auto max-h-[100vh]'>
//         //             <div className='flex text-sm border-b-2'>
//         //                 <div className='w-[10%] font-semibold p-1 py-2 pl-2 border-r border-gray-300'>#</div>
//         //                 <div className='w-[30%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Verified
//         //                     <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
//         //                 </div>
//         //                 <div className='w-[30%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Pending
//         //                     <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
//         //                 </div>
//         //                 {/* <div className='w-[20%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Price
//         //             <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
//         //         </div> */}
//         //                 {/* <div className='w-[10%] h-[9%] font-semibold py-2 px-3 border-r border-gray-300 flex justify-between'>Status
//         //                 <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
//         //             </div> */}
//         //                 <div className='w-[30%] font-semibold py-2 px-3 border-gray-300 flex justify-between'>Rejected
//         //                     <div><BiSort className='font-semibold text-gray-400 text-lg' /></div>
//         //                 </div>
//         //             </div>
//         //             <div className="overflow-y-auto">
//         //                 {data && data.map((item, index) => (
//         //                     <div key={index} className='flex text-sm border-t text-gray-500'>
//         //                         <div className='w-[10%] p-1 py-2 pl-2 border-r border-gray-300'>{index + 1}</div>
//         //                         <div className='w-[30%] py-2 px-3 border-r border-gray-300 truncate'>{item?.
//         //                             verified?.username
//         //                         }
//         //                         </div>
//         //                         <div className='w-[30%] py-2 px-3 border-r border-gray-300 '>{item?.pending?.username}
//         //                         </div>
//         //                         {/* <div className='w-[10%]  py-2 px-3 border-r border-gray-300'><div>
//         //                                <Switch onChange={(e) => setStatus(e.target.checked)} />
//         //                                </div>
//         //                             </div> */}
//         //                         <div className='flex w-[30%] justify-between py-2 px-10'>
//         //                             {item?.rejected?.username}
//         //                         </div>
//         //                     </div>))}
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div>
//         <div></div>
//     )
// }

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  export default function Verification() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const [data, setData] = React.useState();
    const PlanVerify = async () => {
        const response = await ProfileVerify();
        console.log("Verification..........", response?.data);
        setData(response?.data || []); 
    };

    React.useEffect(() => {
        PlanVerify();
    }, []);
  
    return (
      <Box sx={{ width: '100%' }} className='!text-white'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} className='!text-white' aria-label="basic tabs example">
            <Tab label="Verified" {...a11yProps(0)} />
            <Tab label="Pending" {...a11yProps(1)} />
            <Tab label="Rejected" {...a11yProps(2)} />
          </Tabs>
        </Box>
        {data && data?.verified?.map((i,index) =>( 
        <CustomTabPanel value={value} index={0}>
          {i?.username}
        </CustomTabPanel>
        ))}
        {data && data?.pending?.map((item,index) =>( 
        <CustomTabPanel value={value} index={1}>
          {item?.username}
        </CustomTabPanel>
        ))}
        {data && data?.rejected?.map((j,index) =>( 
        <CustomTabPanel value={value} index={2}>
          {j?.username}
        </CustomTabPanel>
        ))}
      </Box>
    );
  }
