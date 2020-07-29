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
        const j = item[0] + I
        const t = item[1] + k
        return [j,t]
    })
    // console.log(x)
    return x
}



export const setDragItem=(cb,grid,i,k,value,arr)=>{

    const values = getDragValue(arr,i,k)

    cb(()=>{
        return produce(grid,gCopy=>{
            values.forEach(x=>{
                gCopy[x[0]][x[1]] = 1
            })
        })
    })

}

export const setMap=(cb,grid,arr)=>{
    cb(()=>{
        return produce(grid,gCopy=>{
            arr.forEach(x=>{
                gCopy[x[0]][x[1]] = 1
            })

        })
    })

}
