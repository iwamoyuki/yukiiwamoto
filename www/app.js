// This is a JavaScript file
SpeechRec.config({
   'SkyWayKey':'100800df-cc05-4212-a1b0-031724b4398b',
   'OpusWorkerUrl':'libopus.worker.js'
});

function start_rec(){
 SpeechRec.start();
 console.log("音声認識を開始します");
 $("#state").text("認識中");
};
 
function stop_rec(){
 SpeechRec.stop();
 console.log("音声認識を停止します");
 $("#state").text("停止中");
};
 
SpeechRec.on_result(function(result){
    console.log(result.candidates);
    
    $("#result").text(result.candidates[0].speech);
});
