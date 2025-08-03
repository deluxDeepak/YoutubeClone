export const API_KEY="YourAPIKEY to test"

// value convert from thousand views to million aur k 
export const value_convert=(value)=>{
    if(value>1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
        return Math.floor(value/1000)+"K";
    else 
        return value;
}
