
/*function superbowlWin(record) {
    if (result === "W"){
     return record.find(superbowlWin(year));
    }
    else if (result === "N/A")
    return undefined;
}*/

function superbowlWin(record){
    for(let item of record){
        if(item.result === "W"){
            return item.year;
        }
    }
}