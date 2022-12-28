//const spawn = require('child_process').spawn
//const ffmepgs = require('fluent-ffmpeg');
//const { exec, ChildProcess } = require('node:child_process');
//import { ChildProcess } from "child_process"
//import exec from child_process;
const exec = require('child_process')



function stream_push(){
    //ffmpeg -f dshow -i video="USB  Live camera":audio="Mikrofon (USB Live Camera audio)" -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/live/demo.flv
    //node.js 本身对ffmpeg的封装。
    playsure = new ffmpegs()
    plysure.input('视频路径')
    paysure.inputOption('-re')
    playsure.outputOptions([
        '-rtsp_transport',
        'tcp',
        '-f',
        'rtsp'
    ])

    plysure.outputOptions('视屏输出路径')
    playsure.run()
    playsure.on('end',()=>{
        console.log('Process end')
    })
}

function stream_push_video(){
    //var exec = require('child_process').exec;
    child = exec("ffmpeg -f dshow -i video=\"USB  Live camera\":audio=\"Mikrofon (USB Live Camera audio)\" -vcodec libx264 -acodec aac -f flv rtmp://localhost:1935/live/demo.flv",function(error,stdout,stderr){
    sys.print('STDOUT: ',stdout);
    sys.print('STDERR: ',stderr);
    sys.print('ERRORS: ',error);
});
}

function stream_push_demo(){
    //var exec = require('child_process').exec;
    child = exec("ffmpeg -re -i D:\\JSWorkplace\\MediaClientApp\\server\\demo.mp4 -c copy -f flv -flvflags no_duration_filesize rtmp://localhost:1935/live/demo.flv ",function(error,stdout,stderr){
    sys.print('STDOUT: ',stdout);
    sys.print('STDERR: ',stderr);
    sys.print('ERRORS: ',error);
});
}

