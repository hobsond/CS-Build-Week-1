import produce from 'immer'
//change value 
//takes in a cb which is going to set the state 
// take in the grid,placement, and value

export const changeValue = (cb,grid,i,k,value)=>{
    cb(()=>{
        return produce(grid,gCopy=>{
            gCopy[i][k] = value

        })
    }
    )
}