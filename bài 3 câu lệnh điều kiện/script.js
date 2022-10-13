var a = prompt('nhập giá trị cho a')
var b = prompt('nhap giá trị cho b')
alert(typeof(a)); //typeof kiểm tra xem biến a thuộc kiểu gì kiểu string
//if
   a = Number(a);   //ép kiểu cho biến a đang string chuyển sang number
//    b = Number(b);  //ép kiểu cho biến b đang string chuyển sang number
// console.log(typeof(a)); //hàm console.log hàm chạy gầm
// // if
//   if(a>b){
//   	console.log(a+ 'lớn hơn' +b);
//   	}
// // if else
//    if(a>b){
//    	console.log(a+ 'lớn hơn' +b);
//    	}
//    	else{
//    		console.log(a+ 'nhỏ hơn hoặc bằng' +b);
//     }
// // if else if else
//   if(a>b){
//   	console.log(a+ 'lớn hơn' +b);
//   	}
//   else if(a<b){
//   	   console.log(a+ 'nhỏ hơn' +b);
//   	   }
//   	   else{
//   	   	console.log(a+ 'bằng' +b);
//   	   	}
// switch case
  switch(a){
  	case 1: console.log(a+ 'bằng 1'); break; //break là để ngừng điều kiện này luôn và thoát khỏi câu lệnh switch
  	case 2: console.log(a+ 'bằng 2'); break;
  	case 3: console.log(a+ 'bằng 3'); break;
  	case 4: console.log(a+ 'bằng 4'); break;
  default:
     console.log(a+ 'không bằng 1,2,3,4');
     }
