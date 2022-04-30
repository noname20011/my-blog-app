import { ShimmerBadge } from "react-shimmer-effects";
import { Hearts } from 'react-loader-spinner'
import React from 'react'

const Spinner = () => {
    return (
        <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Hearts color="#D57662" height={120} width={120}/></div>
    )
}

export default Spinner