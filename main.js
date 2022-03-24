/*
    Số nguyên tố là số gì?
    - Là số chỉ chia hết cho chính nó!

    Trong công thức Toán nó sẽ biểu diễn ra sao?

    Số nguyên tố là tập hợp những số tự nhiên chỉ chia 
    hết cho 1 và chính nó.

*/

// function test__soNguyento (){
//     if()
// }

/*
    i % i == 0;
    &&
    i % (1 - 9) == 0

*/

// document.getElementById("btnBt05").onclick = function(){

//     var so__Duoc__nhan = +document.getElementById("so__Nguyen__bt5").value;
//     var gom_So_nguyen_to = [];
//     for(var i = 1; i <= so__Duoc__nhan; i++)
//     {
//         if(i == 1 || i == 2 || i == 3 || i == 5 || i == 7)
//         {
//             console.log(i + " là số nguyên Tố");
//             gom_So_nguyen_to.push(i);
//         }
//         else if(i == 4 || i == 6 || i == 8 || i == 9)
//         {
//             console.log(i + " không là số nguyên Tố");
//         }
//         else if(i > 9)
//         {
//             for(var m = 3; m <= 9; m = m + 2)
//             {
//                 if(i % m == 0)
//                 {
//                     console.log(i + " không là số Nguyên Tố");       
//                 }
//                 else
//                 {
//                     console.log(i + " là số Nguyên Tố");       
//                     gom_So_nguyen_to.push(i);
//                 }
//             }
//         }  
//     }
//     console.log(gom_So_nguyen_to);
// }

function xet__So_nguyenTo (a) {
    // Giờ chỉ có số 02 là số chẵn mà là số nguyên tố thôi nè
    // Ngoại trừ 2 ra, thì không có số chẵn nào nữa;
    // Xét dưới 10 là
    var a; // (Số này là số được nhận);
    var gom__So__nguyenTo = [];
    for(var i = 1; i <= a; i++)
    {
        if(i == 1 || i == 2 || i == 3 || i == 5 || i == 7)
        {
            console.log(i + " là số nguyên Tố");
            gom__So__nguyenTo.push(i);
            //break;
        }
        else
        {
            if(i % 2 == 0)
            {
                console.log(i + " không phải là số nguyên Tố");
            }
            else
            {
                if(i % 3 == 0 || i % 5 == 0 || i % 7 == 0 || i % 9 == 0)
                {
                    console.log(i + " không phải là số nguyên Tố");
                }
                else
                {
                    console.log(i + " là số nguyên Tố");
                    gom__So__nguyenTo.push(i);
                }
                // for(var m = 3; m <= 9; m = m + 2)
                // {
                //     if(i % m == 0)
                //     {
                //         console.log(i + " không phải là số nguyên Tố");
                //         break;
                //     }
                //     /*--- Khúc này là vầy nè, 9 % 3 == 0 là đúng, nhưng nếu
                //     9 % 5 hoặc % 7 thì đâu có bằng 0 nên nó xét là số nguyên
                //     tố*/

                //     else if (i % m != 0 )
                //     {
                //         console.log(i + " là số nguyên Tố");
                //         gom__So__nguyenTo.push(i);
                //     }
                // }
            }
        }
        // else if(i > 2 && i % 2 == 0)
        // {
        //     console.log(i + " Không phải là số nguyên tốt");
        //     //break;
        // }
        // else
        // {
        //     for(var j = 3; j < 9; j + 2)
        //     {
        //         if(i % j == 0)
        //         {
        //            console.log(i + " Không phải là số nguyên tốt");
        //            //break;
        //         }
        //     }
        // }
    }
    console.log(gom__So__nguyenTo);
    return gom__So__nguyenTo;
}

document.getElementById("btnBt05").onclick = function(){
    var so__Duoc__nhan = +document.getElementById("so__Nguyen__bt5").value;
    var inKQ = xet__So_nguyenTo(so__Duoc__nhan);
    document.getElementById("footerBt05").innerHTML = inKQ;
}

