/* eslint-disable react/react-in-jsx-scope */
import React, {useState} from 'react'

interface PopUpProps {
    message: any
    visibility: boolean
    setVisibility: (boolean) => void
  }

  
  const PopUpMessage: React.FC<PopUpProps> = ({message, visibility, setVisibility}) => {
   

    return (
        //  <div style={{display: visibility? 'flex': 'none', position: 'absolute', zIndex: 10, top: '0px', left: '0px', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center'}}>
        //  <div style={{position: 'absolute', top: '10%', width: '30%', height: '30%'}}>
          <div className="popupmessage-background" style={{display: visibility? 'flex' : 'none', zIndex: 10}}>
           <div className="popupmessage-modal"> 
        {/* <InnerModalStyled onDismiss={()=>{setVisibility(false)}}> */}
            <video className="popupmessage-video" autoPlay playsInline controls={false} loop muted>
          <source src={message[1]} />
            </video>
            <h2>Congratulations! You Opened Up Grade {message[2]}!!!</h2>
        {/* </InnerModalStyled> */}
          </div>
         </div> 
        //  </div>
        //  </ div>
    )
}

export default PopUpMessage
