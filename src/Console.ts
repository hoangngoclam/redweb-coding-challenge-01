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
}
export default Console