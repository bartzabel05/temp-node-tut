// // sync approach
// const {readFileSync,writeFileSync}=require('fs');
// const fs=require('fs');
// console.log('start');
// const first=readFileSync('./content/first.txt','utf8');
// const second=readFileSync('./content/second.txt','utf8');

// // console.log(first);
// // console.log(second);

// writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second} \n`,{flag:'a'});
// console.log('Done with this task');
// console.log('Starting the next one');

// async approach
const {readFile,writeFile}=require('fs');
console.log('start');
// run callback when we are done
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return ;
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return ;
        }
        const second=result;
        writeFile('./content/result-async.txt',`Here is the result: ${second} ${first}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            // console.log(result);
            console.log('Done with this task');
        });
    });
});
console.log('Starting next task');