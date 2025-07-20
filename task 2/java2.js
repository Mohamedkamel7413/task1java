let q1 = confirm(`هل انت بتهتم`);
if(q1 == true){
    let q2 = confirm (`هل انت عندك دم`);
    if(q2 == true){
        let q3 = confirm (`هل انت بتحس ياعم`);
        if (q3 == true){
            document.write(`مصلحاك`);
        }else{
            document.write(`مخصماك`);
        }
    }else{
            document.write(`مخصماك`);
        }
}else{
            document.write(`مخصماك`);
        }