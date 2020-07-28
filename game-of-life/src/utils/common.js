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

//getting the drag value

//it will take in an array of items which will be arrays
// for each of those arrays 
// i will take in the current placement
// add each value to each and return into an array
const getDragValue = (arr,I,k)=>{

    let x = arr.map(item=>{
        return [item[0] + I, item[1] + k]
    })
    return x
    
}

export const setDragItem=(cb,grid,i,k,value,arr)=>{

    const values = getDragValue(arr,i,k)
    values.forEach(x=>{
        changeValue(cb,grid,x[0],x[1],1)
    })

}

