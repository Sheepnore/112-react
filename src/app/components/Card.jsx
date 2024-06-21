/** 
 * @author Kevin Shie <a83850066@gmail.com>
 */

import AutoSizeImage from "./AutoSizeImage";

export default function Card({item}) {
    
    return (
        <div className="border">
            <AutoSizeImage src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1}/>
            <div>{item.ScenicSpotName}</div>
            <div>{item.Description}</div>
            <div><a href={item.MapUrl}></a></div>
        </div>
    )
}