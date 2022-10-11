let itemName = "tablet" , itemnumber = 10, itemPrice=50 ,itemQty=1 
export const itemData = []

for (let i = 0 ; i < itemnumber ; i++){
    itemData.push(
        {
            itemName:`${itemName}  ${i+1}`,
            itemPrice:`${(itemPrice*((i+2)*2))}`,
            itemQty:`${itemQty}`,
            itemImg:`https://picsum.photos/20${i}`,
            id:`${i}`
        }
    )
} 