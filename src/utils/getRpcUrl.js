import sample from 'lodash/sample'

// Array of available nodes to connect to
export const nodes = [
  "https://main-light.eth.linkpool.io/",
  "https://nodes.pancakeswap.com"
]

const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl
