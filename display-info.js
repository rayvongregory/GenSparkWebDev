const body = document.getElementsByTagName("body")[0]
const urlParams = new URLSearchParams(window.location.search)
const fname = urlParams.get("fname")
const lname = urlParams.get("lname")
const email = urlParams.get("email")
const phoneNumber = urlParams.get("phone")
const address1 = urlParams.get("address1")
const address2 = urlParams.get("address2")
const city = urlParams.get("city")
const zipCode = urlParams.get("zipcode")
const state = urlParams.get("state")

const greeting = () => {
  const h2 = document.createElement("h2")
  h2.textContent = `Thanks for registering, ${fname}!`
  body.appendChild(h2)
}

const displayClientInformation = () => {
  const ul = document.createElement("ul")
  const fullNameLI = document.createElement("li")
  const emailLI = document.createElement("li")
  const phoneNumberLI = document.createElement("li")
  const addressLI = document.createElement("li")

  fullNameLI.textContent = `Full name: ${fname} ${lname}`
  emailLI.textContent = `Email: ${email}`
  const value = phoneNumber
    .replace("(", "")
    .replace(")", "")
    .replaceAll("-", "")
    .replaceAll(" ", "")
  const ph = `(${value.substring(0, 3)}) ${value.substring(
    3,
    6
  )} - ${value.substring(6)}`
  phoneNumberLI.textContent = `Phone Number: ${ph}`
  addressLI.textContent = `Address: ${address1}`
  if (address2 !== "") addressLI.textContent += `, ${address2}`
  addressLI.textContent += `, ${city}, ${state}, ${zipCode}`
  ul.appendChild(fullNameLI)
  ul.appendChild(emailLI)
  ul.appendChild(phoneNumberLI)
  ul.appendChild(addressLI)

  body.appendChild(ul)
}

window.addEventListener("load", () => {
  greeting()
  displayClientInformation()
})
