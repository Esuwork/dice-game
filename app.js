    // Тоглоомын бүх газарт ашиглагдах глобаль хувсагчдыг энэд зарлая.
    
    // Аль тоглог шоо шидэх вэ гэдгийг энд хадгална.

    var activePlayer; 

    // Хоёр тоглогчийн хувьсагчийн оноонууд.

    var scores; 

    // Идэвхтэй тоглогчийн цуглуулж байгаа ээлжийн оноо

    var roundScore;

    // Шооны зургийг харуулахаа больё
    var diceDom = document.querySelector(" .dice");

    // Тоглоомыг эхлүүлнэ.
    initGame ();

    // Тоглоомыг шинээр эхэлж байна.

    function initGame () {
        //  Тоглогчийн ээлжийг хадгалах хувьсагч / 1-р тоглогчийг 0, 2-р тоглогчийг 1 гэж тэмдэглэе.
        activePlayer = 0;


        //  Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
        scores = [0,0];


        //  Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
        roundScore = 0;


        //  Шоог аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр өгнө.
        var diceNumber = Math.floor(Math.random() * 6) + 1;

        // <div class="player-score" id="score-0">43</div>

        // Программ эхлэхэд бэлтгэе
        document.getElementById('score-0').textContent = "0";
        document.getElementById('score-1').textContent = "0";
        document.getElementById('current-0').textContent = "0"; 
        document.getElementById('current-1').textContent = "0"; 
        
        // Тоглогчдын нэрийг буцааж гаргах
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';

        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');

        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');

        document.querySelector('.player-0-panel').classList.add('active');

        // Шоог түр алга болгоно
        diceDom.style.display = "none";
        }

    // Шоог шидэх эвент листенер
    document.querySelector(" .btn-roll ").addEventListener('click', function() {
        // 1 - 6 доторх санамсаргүй нэг тоо гаргаж авна
        var diceNumber = Math.floor(Math.random() * 6) + 1;

        // Шооны зургийг веб дээр гаргаж ирнэ.
        diceDom.style.display = "block";

        // Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ.
        diceDom.src = 'dice-' + diceNumber + '.png';

        // Буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
        if (diceNumber !== 1) {
            // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө.
            roundScore = roundScore + diceNumber;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else {

            // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

            switchToNextPlayer ();

              }
             });

            // HOLD товчны эвент листенер

            document.querySelector('.btn-hold').addEventListener('click', function(){
                
            // Уг тоглогчийн цуглуулсан ээлжний оноог глобаль оноон дээр нь нэмж өгнө.

            scores[activePlayer] = scores[activePlayer] + roundScore;
            

            // Дэлгэц дээр оноог нь өөрчилнө.
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            
            // Уг тоглогч  хожсон эсэхийг (оноо нь 100-с их эсэх) шалгах
            if (scores[activePlayer] >= 50) {

            // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана.
            document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            } else {
            // Тоглогчийн ээлжийг солино
            switchToNextPlayer ();
            }
  

            // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.

            
            });
            // Энэ функц нь тоглох ээлжийг дараагийн тоглогч-руу шилжүүлдэг.
            function switchToNextPlayer(){
            // Энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно. 
            roundScore = 0 ;
            document.getElementById("current-" + activePlayer).textContent = 0;
            // Тоглогчийн ээлжийг нөгөө тоглогч руу шилжүүлнэ.

            activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        
            // Улаан цэгийг шилжүүлэх код
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");

            }

            // New Game буюу Шинэ тоглоом эхлүүлэх товчний эвент листенер

            document.querySelector('.btn-new').addEventListener('click', initGame);