
class Field {
	constructor(selector, rowsNum, colsNum) {
		this._gameEnd = false; // флаг окончания игры
		
		this._field = document.querySelector(selector); // ссылка на игровое поле
		this._colsNum = colsNum;
		this._rowsNum = rowsNum;
		
		this._dots = new Dots;
		this._html = new HTML;
		this._queue = new Queue(['gamer1', 'gamer2']);
		
		this._html.createTable(this._field, this._rowsNum, this._colsNum); // создание таблицы
		this._run();
	}
	
    // начало игры
	_run() {
		this._field.addEventListener('click', () => {
			let cell = event.target.closest('td:not(.gamer)');
		
			if (!this._gameEnd && cell) {
				let col = this._html.getPrevSiblingsNum(cell);
				let row = this._html.getPrevSiblingsNum(cell.parentElement);
				
				let gamer = this._queue.getGamer();
				let dot = new Dot(gamer, cell, row, col, this._dots);
				this._dots.add(dot, row, col);
				console.log(dot);
				
				let winLine = this._checkWin(dot);
				if (winLine) {
					this._win(winLine);
				}
			}
		});
	}
	
	_win(winLine) {
		this._gameEnd = true;
		this._notifyWinnerCells(winLine);
	}
	
	_notifyWinnerCells(winLine) {
		winLine.forEach((dot) => {
			dot.becomeWinner();
		});
	}
	
	_checkWin(dot) {
		let dirs = [
			{deltaRow:  0, deltaCol: -1},
			{deltaRow: -1, deltaCol: -1},
			{deltaRow: -1, deltaCol:  0},
			{deltaRow: -1, deltaCol:  1},
		];
		
		for (let i = 0; i < dirs.length; i++) {
			let line = this._checkLine(dot, dirs[i].deltaRow, dirs[i].deltaCol);
			
			if (line.length >= 5) {
				return line;
			}
		};
		
		return false;
	}
	
	_checkLine(dot, deltaRow, deltaCol) {
		let dir1 = this._checkDir(dot,  deltaRow,  deltaCol);
		let dir2 = this._checkDir(dot, -deltaRow, -deltaCol);
		
		return [].concat(dir1, [dot], dir2);
	}
	
	_checkDir(dot, deltaRow, deltaCol) {
		let result = [];
		let neighbor = dot;
		
		while (true) {
			neighbor = neighbor.getNeighbor(deltaRow, deltaCol);
			
			if (neighbor) {
				result.push(neighbor);
			} else {
				return result;
			}
		}
	}
}

// Хранение всех точек (заполненных ячеек)
class Dots {
	constructor() {
		this._dots = {};
	}
	
    // добавление
	add(dot, row, col) {
		if (this._dots[row] === undefined) {
			this._dots[row] = {};
		}
		
		this._dots[row][col] = dot;
	}
	
    // получение
	get(row, col) {
		if (this._dots[row] && this._dots[row][col]) {
			return this._dots[row][col];
		} else {
			return undefined;
		}
	}
}

// Игровая точка (квадратик)
class Dot {
	constructor(gamer, elem, row, col, dots) {
		this._gamer = gamer;
		this._elem = elem;
		this._row = row; // ряд
		this._col = col; // колонка
		this._dots = dots;
		
        // ссылка на своих сосоедей (8 возможных)
		this._neighbors = {}; // {-1: {1: Dot, 0: Dot}, 0: {1: Dot}}
		
		this._findNeighbors();
		this._notifyNeighbors();
		this._reflect();
	}
	
	getRow() {
		return this._row;
	}
	
	getCol() {
		return this._col;
	}
	
    // хранение победителя
	becomeWinner() {
		this._elem.classList.add('winner');
	}
	
    // получение (ссылку на или notdefault) соседа, 
	getNeighbor(deltaRow, deltaCol) {
		if (this._neighbors[deltaRow] !== undefined) {
			return this._neighbors[deltaRow][deltaCol];
		} else {
			return undefined;
		}
	}
	
    // добавление соседа
	addNeighbor(neighbor) {
        // вычисление смещение
		let deltaRow = neighbor.getRow() - this._row;
		let deltaCol = neighbor.getCol() - this._col;
		
		if (this._neighbors[deltaRow] === undefined) {
			this._neighbors[deltaRow] = {}; 
		}
		
		this._neighbors[deltaRow][deltaCol] = neighbor;
	}
	
    // расматривает все 8 точек вокруг, вызывается в момет постановки точки
	_findNeighbors() {
		this._considerNeighbor(1, 1);
		this._considerNeighbor(1, 0);
		this._considerNeighbor(1, -1);
		this._considerNeighbor(-1, 1);
		this._considerNeighbor(-1, 0);
		this._considerNeighbor(-1, -1);
		this._considerNeighbor(0, 1);
		this._considerNeighbor(0, -1);
	}
	
    // передаем смещение и расматривает, есть ли сосед(точка)
	_considerNeighbor(deltaRow, deltaCol) {
		let neighbor = this._dots.get(this._row + deltaRow, this._col + deltaCol);
		
		if (neighbor !== undefined && neighbor._belongsTo(this._gamer)) {
			this.addNeighbor(neighbor);
		}
	}
	
    // фраг обновления соседей старый точек, для обновления в них нового соседа
	_notifyNeighbors() {
		for (let rowKey in this._neighbors) {
			for (let colKey in this._neighbors[rowKey]) {
				this._neighbors[rowKey][colKey].addNeighbor(this);
			}
		}
	}
	
    // отражает изменения
	_reflect() {
		this._elem.classList.add('gamer');
		this._elem.classList.add(this._gamer);
	}
	
    // проверка, принадлежит ли точка игроку (зеленому/желтому)
	_belongsTo(gamer) {
		return this._gamer == gamer;
	}
}

// Очередь игроков
class Queue {
	constructor(gamers) {
		this._gamers = gamers;
		this._counter = new Counter(this._gamers.length);
	}
	
    // получение номера игрока
	getGamer() {
		return this._gamers[this._counter.get()];
	}
}

class Counter { // 3
	constructor(length) {
		this._length = length;
		this._counter = null; // счетчик
	}
	
	get() { // 0 1 2 0 1 2 
		if (this._counter == null) {
			this._counter = 0;
		} else {
			this._counter++;
			
			if (this._counter == this._length) {
				this._counter = 0;
			}
		}
		
		return this._counter;
	}
}

// создает таблицу
class HTML {
    // записывается таблица
	createTable(parent, rowsNum, colsNum) {
		let table = document.createElement('table');
		
		for (let i = 0; i < rowsNum; i++) {
			let tr = document.createElement('tr');
			
			for (let j = 0; j < colsNum; j++) {
				let td = document.createElement('td');
				tr.appendChild(td);
				
				//td.dataset.row = i;
				//td.dataset.col = j;
			}
			
			table.appendChild(tr);
		}
		
		parent.appendChild(table);
	}
	
    // считает кол-во предыдущих соседей
	getPrevSiblingsNum(elem) {
		let prev = elem.previousSibling;
		let i = 0;
		
		while (prev) {
			prev = prev.previousSibling;
			i++;
		}
		
		return i;
	}
}


new Field('#game', 50, 20);