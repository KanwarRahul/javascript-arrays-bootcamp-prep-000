var chocolateBars=['snickers','hundred grand','kitkat','skittles']
chocolateBars.push('crackles')
console.log(chocolateBars)



function addElementToBeginningOfArray(chocolateBars,element)
{
    
  chocolateBars.unshift(element)
  return chocolateBars
  
}

function  destructivelyAddElementToBeginningOfArray(chocolateBars,element)
{
  var test =[]
return test.push(addElementToBeginningOfArray(chocolateBars,element))
}

function addElementToEndOfArray(chocolateBars,element) 
{ 
  var test1 =[]
  test1.push(element)
  return test1
  
}
function  destructivelyAddElementToEndOfArray(chocolateBars,element)
{
 chocolateBars.push(element) 
 return chocolateBars
}

  function accessElementInArray(chocolateBars,index)
  {
    return chocolateBars[index]
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(chocolateBars)
  {
    return chocolateBars.shift()
  } 
  
  function  removeElementFromBeginningOfArray(chocolateBars)
  {
    return chocolateBars.slice(1)
  }
    
  function destructivelyRemoveElementFromEndOfArray(chocolateBars)
    {
      return chocolateBars.pop()
    }
    
    