import PhoneIcon from '../../assets/phone-outgoing.svg';
import Avatar from '../../assets/avatar.svg';
import Send from '../../assets/send.svg';   
import Input from '../../Components/Input';

const Dashboard = () => {
    const contacts = [
        {
            name: 'Tarak',
            status: 'Available',
            img: Avatar,
        },
        {
            name: 'Varsha',
            status: 'Busy',
            img: Avatar,
        },
        {
            name: 'Naresh',
            status: 'Offline',
            img: Avatar,
        },
        {
            name: 'Guria',
            status: 'Available',
            img: Avatar,
        },
        {
            name: 'Debu',
            status: 'Available',
            img: Avatar,
        }
    ];

    return (
        <div className='w-screen flex'>
            <div className='w-[25%] h-screen bg-[#f3f5ff] overflow-y-auto'>
                <div className='flex items-center my-5 mx-14'>
                    <div className='border border-[#1476ff] p-[2px] rounded-full'>
                        <img src={Avatar} width={75} height={75} alt="profile"/>
                    </div>
                    <div className='ml-7'>
                        <h3 className='text-2xl'>Priyanka</h3>
                        <p className='text-l font-light'>My Account</p>
                    </div>
                </div>
                <hr/>
                <div className='ml-14 mt-10'>
                    <div className='text-[#1476ff] text-lg'>Messages</div>
                    <div>
                        {contacts.map(({name, status, img}, index) => (
                            <div key={name} className='flex items-center py-4 border-b border-gray-300'>
                                <div className='cursor-pointer flex items-center'>
                                    <div><img src={img} width={55} height={55} alt={name}/></div>
                                    <div className='ml-4'>
                                        <h3 className='text-l font-semibold'>{name}</h3>
                                        <p className='text-sm font-light text-gray-600'>{status}</p>
                                    </div>
                                </div>
                            </div>
                        ))}    
                    </div>
                </div>
            </div>

        
            <div className='w-[50%] h-screen bg-white flex flex-col items-center'>
                <div className='w-[75%] bg-[#f3f5ff] h-[80px] mt-10 rounded-full flex items-center px-14'>
                    <div className='cursor-pointer'>
                        <img src={Avatar} width={60} height={60} alt="contact"/>
                    </div>
                    <div className='ml-6 mr-auto'>
                        <h3 className='text-lg'>Tarak</h3>
                        <p className='text-xs font-light text-gray-600'>Online</p>
                    </div>              
                    <div className='cursor-pointer hover:opacity-80'>
                        <img src={PhoneIcon} width={24} height={24} alt='call'/>
                    </div>      
                </div>

                <div className='h-[75%] w-full overflow-y-auto p-14 border-b'>
                    <div className='max-w-[40%] bg-[#dbdeeeff] rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className='max-w-[40%] bg-[#095acbff] rounded-b-xl rounded-tr-xl ml-auto text-white p-4 mb-6'>
                        lorem ipsum dolor sit amet.
                    </div>
                    <div className='max-w-[40%] bg-[#dbdeeeff] rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className='max-w-[40%] bg-[#095acbff] rounded-b-xl rounded-tr-xl ml-auto text-white p-4 mb-6'>
                        lorem ipsum dolor sit amet.
                    </div>
                    <div className='max-w-[40%] bg-[#dbdeeeff] rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className='max-w-[40%] bg-[#095acbff] rounded-b-xl rounded-tr-xl ml-auto text-white p-4 mb-6'>
                        lorem ipsum dolor sit amet.
                    </div>
                    <div className='max-w-[40%] bg-[#dbdeeeff] rounded-b-xl rounded-tr-xl p-4 mb-6'>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className='max-w-[40%] bg-[#095acbff] rounded-b-xl rounded-tr-xl ml-auto text-white p-4 mb-6'>
                        lorem ipsum dolor sit amet.
                    </div>
                </div>
                <div className='p-14 w-full flex items-center'>
                    <Input placeholder='Type a message...'  className='w-[75%]' inputClassName='p-4 border-0 shadow-md rounded-[40px] bg-gray-100 focus:ring-0 focus:border-0 outline-none'/>
                    <div className='ml-4 p-4 cursor-pointer bg-light rounded-full hover:opacity-80'>
                        <img src={Send} width={30} height={30} alt='send'/>
                    </div>
                </div>
            </div>
            <div className='w-[25%] h-screen'></div>
        </div>
    );
};

export default Dashboard;