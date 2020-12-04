import { createInterface, ReadLine } from "readline";

class Console{
    public static rl:any = createInterface({
        input: process.stdin,
        output: process.stdout
      });
    static async ReadLine(question:string):Promise<string>{
        return await new Promise((resole,reject)=>{
            this.rl.question(question, (answer:string) => {
                resole(answer);
            });
        })
    }
    

    static async InputStorkProfit(question:string):Promise<number>{
        let result:number = 0;
        do {
            console.log(`StorkProfit nhập vào phải là chữ số >= 0 và <= 10^9`)
            result = await this.ReadLineNumber(question);
        } while (result <= 0 || isNaN(result) || result >= Math.pow(10,9));
        return result;
    }

    static async InputN(question:string):Promise<number>{
        let result:number = 0;
        do {
            console.log(`n nhập vào phải thảo điều kiện: 0 <= n <= (5*10^5)`)
            result = await this.ReadLineNumber(question);
        } while (result <= 0 || isNaN(result) || result >= 5 * Math.pow(10,5));
        return result;
    }

    static async InputTarget(question:string):Promise<number>{
        let result:number = 0;
        do {
            console.log(`target nhập vào phải thỏa điều kiện: 0 <= n <= (5*10^9)`)
            result = await this.ReadLineNumber(question);
        } while (result <= 0 || isNaN(result) || result >= 5 * Math.pow(10,9));
        return result;
    }

    static async ReadLineNumber(question:string):Promise<number>{
        let numberString:string =  await new Promise((resole,reject)=>{
            this.rl.question(question, (answer:string) => {
                resole(answer);
            });
        })
        return parseInt(numberString)
    }
}
export default Console