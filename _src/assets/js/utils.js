export function getRequest(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        resolve(this.response)
      } else if (this.readyState == XMLHttpRequest.DONE && this.status != 200) {
        reject(this.response)
      }
    }

    xhr.open("GET", url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send();
  })
}

export function postRequest(url, data) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        resolve(this.response)
      } else if (this.readyState == XMLHttpRequest.DONE && this.status != 200) {
        reject(this.response)
      }
    }

    xhr.open("POST", url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
  })
}

export function getBaseUrl() {
  const el = document.querySelector('[data-bind="environment"]')
  const env = el ? el.value : false
  const baseUrl = env === 'development' ? 'http://localhost:5000' : "https://thedividendlist.com"

  return baseUrl
}

export function convertSlug(string) {
  const temp = string.split('-')
  const boundary = temp.at(-1).match(/(max|min)$/) ? temp.pop() : false
  const filter = temp.map((s, i) => i > 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join('')

  return [filter, boundary]
}