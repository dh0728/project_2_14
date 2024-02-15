const Input = require('./enroll/enrol.js')
let mysql = require('mysql2');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});


async function main(){
  console.clear();                          //콘솔창정리
  connection.connect();                     //DB에 연결
  while(true){                              //true 값을 반환하는 동안 프로그램 실행
    console.log(`1. 관리자용 2. 회원용 3. 종료`);
    let menu = await Input.getUserInput();   //menu 값에 입력된 값 저장
    if(menu==='1') {                         //mune 값이 1(관리자용) 이라면
      console.log('1.물품 2. 회원 3. 주문');     //1. 물품, 2. 회원, 3.주문 메뉴를 보여줌
      let manager = await Input.getUserInput(); // manager 값에 입력된 값 저장
      if(manager === '1'){                      // 1. 물품을 고른다면
        console.log(`${manager}번 메뉴 (회원) 선택하셨습니다.`) //1번 메뉴 선택했습니다.
        console.log(`다음에 할 작업을 고르세요`)                //다음에 할 작업을 고르세요
        console.log(`1.입력/추가 2.수정 3.삭제 4.데이터 보기 5.종료`)// 5개의 메뉴 보여줌
        let select = await Input.getUserInput();             //select에 입력된 값 저장
        if(select === '1'){                                  //1번이 입력되면
            console.log(`${manager}번 메뉴 (입력/추가) 선택하셨습니다.`) //1번 메뉴 선택했습니다.
            console.log(`어떤 브랜드의 제품이신가요?`)                //다음에 할 작업을 고르세요
            console.log(`1.나이키 2.아디다스 3.반스 4.퓨마 5.컨버스`)// 5개의 메뉴 보여줌
            let select = await Input.getUserInput();             //select에 입력된 값 저장
            if(select === `1`){
                let nike = 100;
                console.log(`${nike}xx${size}`)
                // let sql= 
            }
        }
      }
      let sql = `INSERT INTO todos(title,completed) VALUES(?,false)`;
      connection.query(sql,[title]);
    }else if(menu==='2'){
      console.log('1. 회원가입 2. 로그인');
      let customer = await Input.getUserInput();
      if(customer === '1'){
        console.log(`회원가입 >`);
        let 
      }

    }else if(menu==='3'){ 
      console.log('프로그램 종료');
      connection.end();
      process.exit();
    }else{ 
        console.log('메뉴를 잘못 선택하셨습니다.');
    };
    await wait(1000);
    console.clear();
  };
  
};

main();

const wait = (timeToDelay) => new Promise((resolve) => setTimeout(resolve, timeToDelay));
