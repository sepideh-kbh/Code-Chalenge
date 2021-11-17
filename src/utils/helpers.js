export const returnMockData = (mockedData, delay) => {
  return new Promise(resolve => {
    return setTimeout(resolve(mockedData), delay);
  })
}