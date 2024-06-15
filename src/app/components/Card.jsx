/** 
 * @author Kevin Shie <a83850066@gmail.com>
 */

import Image from "next/image";

export default function Card({item}) {
    
    return (
        <div className="border">
            <div>{item.ScenicSpotName}</div>
        </div>
    )
}