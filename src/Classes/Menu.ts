import Console from "./Console";
import StocksProfit from "./StocksProfit";
import { IStocksProfit } from '../Interfaces/IStocksPoket'
import * as fs from 'fs';
import * as path from 'path';

class Menu{
    public maxMenuNumber:number = 3;
    public fileTestName:string = "dataTest.json";
    constructor(){

    }
    public ShowMenu():void{
        console.log();
        console.log("==========[ Menu ]=============");
        console.log("===============================");
        console.log("1. Nhập dữ liệu tay");
        console.log("2. Test dữ liệu tự động từ file");
        console.log("3. Thoát chương trình");
        console.log("===============================");
    }
    public async ChooseMenu():Promise<number>{
        let chooseNum:number;
        do {
            this.ShowMenu();
            chooseNum = await Console.ReadLineNumber("Nhập vào lựa chọn của bạn: ");
        } while ( chooseNum > 0 && chooseNum > this.maxMenuNumber);
        return chooseNum;
    }

    public async RunMenu():Promise<void>{
        let chooseMenu:number
        do {
            chooseMenu = await this.ChooseMenu();
            switch(chooseMenu){
                case 1:{
                    let nNum:number = await Console.InputN("Nhập vào độ lớn của mảng StorksProfix: ");
                    let arrayProfix1:number[] = [];
                    console.log("num:",nNum);
                    for (let i = 1; i <= nNum; i++) {
                        let profitItem:number = await Console.InputStorkProfit(`Nhập phần tử thứ ${i}: `);
                        arrayProfix1.push(profitItem);
                    }
                    let target:number = await Console.InputTarget("Nhập target bạn cần tính: ");
                    let stocksProfit:StocksProfit = new StocksProfit(arrayProfix1,target);
                    let result:number[][] = stocksProfit.GetDistinctPairs();
                    console.log("Kết quả tính toán được:"+ result.length)
                    console.log(result);
                    break;
                }
                case 2:{
                    let readFile:Promise<string> = new Promise((res,rej)=>{
                        fs.readFile(path.join(__dirname, `../Data/${this.fileTestName}`),'utf8', function (err,data){
                            if(err){
                                rej("Error when read file");
                            }
                            res(data);
                        })
                    }) 
                    let data:string = await readFile
                    let jsonData:IStocksProfit[] = JSON.parse(data); // [{StocksPocket:[],target}]
                            jsonData.forEach((element:IStocksProfit,index)=> {
                                console.log();
                                console.log(`=================[${index+1}]==================`);
                                console.log(`StocksPocket[${element.ArrayProfit.length}]: [${element.ArrayProfit}]`);
                                console.log(`Target: ${element.Target}`);
                                console.log(`Kết quả mong đợi: ${element.Desire}`);
                                console.log(`Tính toán`);
                                let stocksProfitTest:StocksProfit = new StocksProfit(element.ArrayProfit,element.Target);
                                let arrResult:number[][] = stocksProfitTest.GetDistinctPairs();
                                console.log(`. Kết quả tính toán được: ${arrResult.length}`);
                                console.log(`. Kết quả: ${arrResult}`)
                                console.log(`. Kết quả test: ${arrResult.length === element.Desire ? "Oke": "Fail"}`)
                                console.log("=====================================");
                            });
                    break;
                }
                default:
                    break;
            }
        } while (chooseMenu < this.maxMenuNumber);
        process.exit();
    }
}
export default Menu