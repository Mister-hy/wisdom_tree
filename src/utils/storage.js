function setItem(key, val) {
  if (typeof val === 'object') {
    val = JSON.stringify(val)
  }
  localStorage.setItem(key, val)
}

function getItem(key) {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

function delItem(key) {
  localStorage.removeItem(key)
}

export { setItem, getItem, delItem }
