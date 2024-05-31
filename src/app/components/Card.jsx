/* 
 * @author Kevin Shie <a83850066@gmail.com>
 */

export default function CustomCard(item){ // export 這個function出去，當讀到這個檔案時，會先讀預設的`CustomCard` function.
    return (
        <div class="border">
            <div>{item.ScenicSpotName}</div>
        </div>
    )
}