export const capitalizeString = (text) =>{
    return (text || "").charAt(0).toUpperCase() + ((text || "").toLowerCase().slice(1)).split(",")
}