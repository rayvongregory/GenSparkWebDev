const body = document.getElementsByTagName("body")[0]
const form = document.getElementsByTagName("form")[0]
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phone")
const address1 = document.getElementById("address1")
const address2 = document.getElementById("address2")
const city = document.getElementById("city")
const state = document.getElementById("state")
const submitBtn = document.getElementById("submit")

const submitForm = (e) => {
  e.preventDefault()
  if (!checkFirstName()) return error("Please enter your first name")
  if (!checkLastName()) return error("Please enter your last name")
  if (!checkEmail()) return error("Please enter a valid email address")
  if (!checkPhoneNumber()) return error("Please enter a valid phone number")
  if (!checkAddress1()) return error("Please enter a valid address")
  if (!checkCity()) return error("Please enter the name of your city")
  if (!checkState())
    return error("Please choose a state from the dropdown menu")
  body.removeChild(form)
  greeting()
}

const checkFirstName = () => {
  if (fname.value.trim() === "") return false
  return true
}

const checkLastName = () => {
  if (lname.value.trim() === "") return false
  return true
}

const checkEmail = () => {
  if (email.value.trim() === "") return false
  return true
}

const checkPhoneNumber = () => {
  if (phoneNumber.value.trim() === "") return false
  return true
}

const checkAddress1 = () => {
  if (address1.value.trim() === "") return false
  return true
}

const checkCity = () => {
  if (city.value.trim() === "") return false
  return true
}

const checkState = () => {
  if (state.value.trim() === "") return false
  return true
}

const error = (errorMsg) => {
  const p = document.createElement("p")
  p.textContent = errorMsg
  form.appendChild(p)
  submitBtn.disabled = true
  setTimeout(() => {
    form.removeChild(p)
    submitBtn.disabled = false
  }, 1500)
}

const greeting = () => {
  const h2 = document.createElement("h2")
  h2.textContent = `Thanks for registering, ${fname.value.trim()}!`
  body.appendChild(h2)
}
