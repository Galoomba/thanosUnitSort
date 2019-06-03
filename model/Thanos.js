module.exports = class ThanosSort{

    constructor(){
        this.ret=0;
    }

    // isSorted(array){
    //     for ( let i =1; i<array.length;i++){
    //         if(array[i-1]>array[i])
    //             return false;
    //     }

    //     return true;
    // }

    isSorted(array){
        return array.every((v,i,a) => !i|| a[i-1] <= v);
    }

    compareSize(num){
        this.ret=(this.ret>=num)?this.ret:num;
    }

    getLength(){return this.ret}


    solve(array){
        if(array.length==0)
            return ;

        if (this.isSorted(array)){
            this.compareSize(array.length);   
        }
        else{
            const half=array.length/2;
            const rightSide = array.slice(0,half);
            const leftSide = array.slice(half,array.length);

            this.solve(rightSide);
            this.solve(leftSide);
        }
    }

}