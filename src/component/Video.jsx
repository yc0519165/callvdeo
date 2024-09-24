import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export const Video = () => {
   const {id} = useParams()
   const roomID = id
   // const roomID = getUrlParams().get('roomID') || randomID(5);
      let myMeeting = async (element) => {
     // generate Kit Token
      const appID = 2107127108;
      const serverSecret = "48c9bdaf7c71b37b2e7b8504d491ecfc";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), "yuvraj chavhan");

    
     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
   }
  return (
    <div ref={myMeeting}>

    </div>
  )
      }
