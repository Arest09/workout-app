export const checkCompleted = times => {
  const completeTime = times.find(item => {
    return !item.isCompleted
  })

  return completeTime ? false : true
}
