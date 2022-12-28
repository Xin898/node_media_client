let express = require("express");
let app = express();

 
app.use(express.static("html"));//关键是这一句，我的目录是html的目录
 
app.listen(8091, ()=>{
    console.log("服务启动成功。");
})

//服务器启动时开始推流
const util = require('util');
const child_process = require('child_process');
// 调用util.promisify方法，返回一个promise,如const { stdout, stderr } = await exec('rm -rf build')
const exec = util.promisify(child_process.exec);

const stream_push_demo = async function(){
    //var exec = require('child_process').exec;
    child = exec("ffmpeg -re -i D:/JSWorkplace/MediaClientApp/server/demo.mp4 -c copy -f flv -flvflags no_duration_filesize rtmp://localhost:1935/live/demo.flv ",function(error,stdout,stderr){
    console.log('STDOUT: ',stdout);
    console.log('STDERR: ',stderr);
    console.log('ERRORS: ',error);
})}
//stream_push_demo();

const stream_push_video = async function (){
    //var exec = require('child_process').exec;
    child = exec("ffmpeg -f dshow -i video=\"USB  Live camera\":audio=\"Mikrofon (USB Live Camera audio)\" -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/live/demo.flv",function(error,stdout,stderr){
    console.log('STDOUT: ',stdout);
    console.log('STDERR: ',stderr);
    console.log('ERRORS: ',error);
});
}
stream_push_video();