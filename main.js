function start_button(){

    navigator.mediaDevices.getUserMedia({audio :true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/uwwW3HoiS/model.json", model_loaded);
}


function model_loaded(){

    console.log("model is loaded");
    classifier.classify(gotResults);
}

function gotResults(error, results){

    if(error){

        console.error(error);

    }
    else{

        console.log(results);

       document.getElementById("result_sound").innerHTML = "I can Hear :  " + results[0].label;
     
       document.getElementById("accuracy_result").innerHTML =  "Accuracy : " + results[0 ].confidence;

       img1 = document.getElementById("aliens_01");
       img2 = document.getElementById("aliens_02");
       img3 = document.getElementById("aliens_03");
       img4 = document.getElementById("aliens_04");

       
        if(results[0].label  == "Clapping"){

            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";

        }
        else if(results[0].label  == "Whistle"){

            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";

        }
        else if(results[0].label  == "Bell"){

            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";

        }
        else{

            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";

        }

    }
}