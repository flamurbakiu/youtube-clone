import React from 'react'
import "./ChannelRow.css"
import {Avatar} from "@material-ui/core"
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';


function ChannelRow({image, channel, verified, subs, nOfVideos, description}) {
    return (
        <div className="channelRow">
            <Avatar 
                className="channelRow__logo"
                src={image}
                alt={channel}
            />

            <div class="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />} </h4>
                <p>{subs} subscribers • {nOfVideos} videos</p>

                <p>{description}</p>
            </div>

        </div>
    )
}

export default ChannelRow;
