
import StorksProfix from "./StorksProfix";
import Console from "./Console";

async function run() {
    let nString:string = await Console.ReadLine("Nhập vào số lượng cần nhập: ");
    let nNum:number = parseInt(nString);
    let arrayProfix1:number[] = [];
    console.log("num:",nNum);
    for (let i = 1; i <= nNum; i++) {
        let aString:string = await Console.ReadLine(`Nhập phần tử thứ ${i}: `);
        let aNum:number = parseInt(aString);
        arrayProfix1.push(aNum);
    }
    let targetString:string = await Console.ReadLine("Nhập target bạn cần tính: ");
    let targetNum:number = parseInt(targetString);
    let stocksProfix1: StorksProfix = new StorksProfix(arrayProfix1,targetNum);
    let result:number[][] = stocksProfix1.GetDistinctPairs();
    console.log(result);
}
run();



