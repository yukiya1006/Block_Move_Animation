const container = document.querySelector(".container");

// for文で５０個divタグを生成
for (let i = 0; i <= 50; i++) {
  //タグを生成
  const blocks = document.createElement("div");
  // blockというクラスを付加
  blocks.classList.add("block");
  // containerにblocksをappend
  container.appendChild(blocks);
}

function animateBlocks() {
  // blockの位置
  anime({
    targets: ".block",
    translateX: () => { 
      return anime.random(-800, 700);
    },
    translateY: () => { 
      return anime.random(-800, 700);
    },
    // ブロックの大きさ
    scale: function() {
      return anime.random(1, 2);
    },
    duration: 3000,
    delay: anime.stagger(10),
    // 終了時にanimeBlock関数を呼び返しループさせる
    complete: animateBlocks,
  });
}

animateBlocks();
