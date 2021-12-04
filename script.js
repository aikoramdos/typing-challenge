let Q = ["cin","cout","for","while","int","bit all tansaku","tree","javascript","doctype html"];//問題文
		let Q_No = Math.floor( Math.random() * Q.length);//問題をランダムで選ぶ
		
		let Q_index = 0;//現在単語どこまで合っているか
		let Q_length = Q[Q_No].length;//文字の長さ
		
		
		window.addEventListener("keydown", push_Keydown);
		
		function push_Keydown(event){
		
		let keyCode = event.key;
		if (Q_length == Q_length-Q_index){
		
			document.getElementById("start").innerHTML = Q[Q_No].substring(Q_index, Q_length); //問題を書き出す
		
		}
		
		
		if (Q[Q_No].charAt(Q_index) == keyCode) { //押したキーが合っていたら
		
			Q_index++; //判定する文章に１足す
			document.getElementById("start").innerHTML = Q[Q_No].substring(Q_index, Q_length); //問題を書き出す
		
			if (Q_length-Q_index === 0){ //全部正解したら
		
		
				Q_No = Math.floor( Math.random() * Q.length);
				Q_index = 0;
				Q_length = Q[Q_No].length;
		
		
				document.getElementById("start").innerHTML = Q[Q_No].substring(Q_index, Q_length); //新たな問題を書き出す
		
			}
		}
	}