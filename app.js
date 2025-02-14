//  Тоглогчийн ээлжийг хадгалах хувьсагч / 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
    var activePlayer = 1;


//  Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
    var scores = [0, 0];


//  Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    var roundScore = 0;


//  Шоог аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр өгнө.
    var dice = Math.floor(Math.random() * 6) + 1;

    // <div class="player-score" id="score-0">43</div>

    // Программ эхлэхэд бэлтгэе
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').innerHTML = 0;


    // Цуглуулсан оноог 0 болгоё
    document.querySelector('#current-0').innerHTML = 0; 
    document.querySelector('#current-1').innerHTML = 0; 

    // Шооны зургийг харуулахаа больё
    document.querySelector(" .dice ").style.display = 'none';

    console.log('Шоо :' + dice);

