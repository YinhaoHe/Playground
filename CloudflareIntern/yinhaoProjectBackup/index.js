
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  try {
    var htmlwriter = new HTMLRewriter()
        htmlwriter.on('p', new ElementHandler()).on('title', new ElementHandler()).on('a', new ElementHandler())
            .on('h1', new ElementHandler())

    const cookie = getCookie(request, 'URL')
    if(cookie) {
      let response = await fetch(cookie)
      return htmlwriter.transform(response)
    }

    let url = await getURL();
    let response = await fetch(url);
    response = new Response(response.body, response)
    response.headers.set('set-cookie', 'URL=' + url + '; Expires= 22 July 2021,Secure, HttpOnly;')
    return htmlwriter.transform(response)
  }
  catch(e) {
    console.log("exception" + e)
  }
}

/**
 * Modify the elements 
 */

class ElementHandler {
  element(element) {
    // Modify the tab title to Yinhao He
    if(element.tagName === 'title'){
      element.setInnerContent("Yinhao He")
    }
    // Modify the header
    if(element.tagName === 'h1'){
      element.prepend("Yinhao's profile")
    }
    //Modify the paragraph
    if(element.tagName==='p'){
      element.setInnerContent("About Yinhao")
    }
    // Modify url
    if(element.tagName === 'a'){
      element.setAttribute('href', 'https://www.linkedin.com/in/yinhaohe/')
      element.setInnerContent("Contact Yinhao on LinkedIn")
    }
  }
}

/**
 * Set random
 * Return one of two URLS
 */

// Target URL
const VARIANT_URL = new URL('https://cfw-takehome.developers.workers.dev/api/variants');

async function getURL() {
  // Set random
  let rand = Math.floor(Math.random() * 2)
  // Return url
  return fetch(VARIANT_URL)
    .then((response) => {
      return response;
    })
    .then((data) => {
      return data.json()
    })
    .then((data) => {
      return data.variants[rand];
    })
}

/**
 * Retrieves the cookie according to url
 */
function getCookie(request, url) {
  let cookieUrlString = request.headers.get('Cookie'), result
  if (cookieUrlString) {
    let cookies = cookieUrlString.split(';')

    cookies.forEach(cookie => {
      let cookieUrl = cookie.split('=')[0].trim() 
      if (cookieUrl === url) {
        let cookieVal = cookie.split('=')[1]
        result = cookieVal
      }
    })
  }
  return result
}

