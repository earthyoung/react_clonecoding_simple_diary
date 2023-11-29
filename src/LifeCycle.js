import React, {useEffect, useState} from "react";

const UnMountTest = () => {
    return <div>Unmount Testing Component</div>
};

const LifeCycle = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return <div style={{padding: 20}}>
        <button onClick={toggle}>ON/OFF</button>
        {isVisible && <UnMountTest />}
    </div>
};

export default LifeCycle;
