# challenge 01
It's call Profit Targets
A financial analyst is responsible for a portfolio of profitable stocks represented in an array. Each
item in the array represents the yearly profit of a corresponding stock. The analyst gathers all
distinct pairs of stocks that reached the target profit. Distinct pairs are pairs that differ in at least
one element. Given the array of profits, find the number of distinct pairs of stocks where the sum of each pair's profits is exactly equal to the target profit.
## Require

Your computer is installed with **nodejs**

## Installation
**run install:** 
```bash
$ npm install
```
**run program:**
```bash
$ npm run dev
```
## Folder contructor

 - **src**
	 - **Classes** (include object for program)
	 - **Data** (include json file data for data test )
	 - **Interface** (include all interface for type)
	 **index.ts** (file main run)

## Features and tutorial
This is menu when program is running
![This is result when running](https://www.dropbox.com/s/fgewk27i1gy3mnj/redWebChallengeImg01.png?raw=1)
### **Enter 1 : when you want to enter data manually**

 - Input n (n is number of stock profit you  want to put in array) with condition: 
	1 <= **n** <= 5*10^5
	
 - Enter each element into the array stocksProfit
 - Enter the target you want to calculate

### **Enter 2 : when you want to run test in file**
you can edit test file in **src/data/dataTest.json**. File will look like this
![Data of json test](https://www.dropbox.com/s/tzzw7kisrnuelyx/redWebChallengeimg02.png?raw=1)
__
Each item have 3 property: 

 - **ArrayProfit:** Array data socksProfit 
 - **Target:** Target you want to test
 - **Desire:** The result you desire
If you enter number 2 in main menu of program you would show the result of test file like this
![Result of test](https://www.dropbox.com/s/3ke9v3rnqhqlg9m/redWebChallengeImg04.png?raw=1)
### **Enter 3 in menu to exit program**

## Note:
Because I write the program in Vietnamese so if you run with error font (utf-8) You should run it in visual code








