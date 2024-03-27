import React from 'react';

const Thumbview = ({pickerValue}) => {
    console.log(pickerValue)
    const renderImageTag = () => {
        let src = '';
        if(pickerValue.thumbId === 1) src = '/tego.png'
        if(pickerValue.thumbId === 2) src = '/01 UNDERME.png'
        if(pickerValue.thumbId === 3) src = '/02 MOPY.png'
        if(pickerValue.thumbId === 4) src = '/03 CUPID.png'
        if(pickerValue.thumbId === 5) src = '/04 DREAM BABY.png'
        if(pickerValue.thumbId === 6) src = '/05 RICHTER.png'
        return <img style={{width:'100%',height:'100%',objectFit:'cover'}} src={src} alt="" />
    }
    return (
        <div style={{height:'350px',width:'100%', display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div style={{width:'20%',height:'100%'}}>
            {renderImageTag()}
            </div>
     
        </div>
    );
};

export default Thumbview;

// linear-gradient(to top, transparent, transparent 5%, white 40%, white 40%, transparent 95%, transparent)