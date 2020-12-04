class StocksProfit{
    private arrayInput: number[] = [];
    private target:number = 0;
    constructor(array:number[],target:number){
        this.arrayInput = array;
        this.target = target;
    }
    private GetCombination(index:number):number[][]{ // [1,2,3] (index:0) =>[[1,2],[1,3]]
        let cloneArr = this.arrayInput.slice()
        let current = cloneArr[index];
        cloneArr.splice(index,1);
        return cloneArr.map(item=>{
            return [current, item]
        })
    }
    private IsExistDistinctArray(arrApply:number[][], num1:number, num2:number):boolean{ // true / false
        if(arrApply.length ===0){
            return false;
        }
        for(let i:number = 0; i<arrApply.length;i++){
            if((arrApply[i][0] === num1 && arrApply[i][1] === num2)
            ||(arrApply[i][0] === num2 && arrApply[i][1] === num1)){
            return true
            }
        }
        return false;
    }
    public GetDistinctPairs():number[][]{ // stockPairs
        let result:number[][] = []
        let arrCombination:number[][] = [];
        this.arrayInput.forEach((item:number,index:number)=>{
            let arrayCombinationIndex = this.GetCombination(index)
            arrCombination = [...arrCombination, ...arrayCombinationIndex];
        })
        arrCombination.forEach((item:number[])=>{
            if(item[0]+item[1] === this.target && !this.IsExistDistinctArray(result,item[0],item[1])){
            result.push(item)
            }
        })
        return result;
    }
}

export default StocksProfit