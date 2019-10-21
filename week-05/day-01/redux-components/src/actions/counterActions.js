
export const resetCounter = () => {
  return { type: 'RESET' }
}

export const setCounter = amount => {
  return { type: 'SET', amount }
}