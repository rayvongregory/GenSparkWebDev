const body = document.getElementsByTagName("body")[0]
const fname = localStorage.getItem("fname")
const lname = localStorage.getItem("lname")
const email = localStorage.getItem("email")
const phone = localStorage.getItem("phone")
const address1 = localStorage.getItem("address1")
const address2 = localStorage.getItem("address2")
const city = localStorage.getItem("city")
const zip = localStorage.getItem("zip")
const state = localStorage.getItem("state")

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
  const value = phone
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
  addressLI.textContent += `, ${city}, ${state}, ${zip}`
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
