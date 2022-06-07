const form = document.getElementsByTagName("form")[0]
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phone")
const address1 = document.getElementById("address1")
const address2 = document.getElementById("address2")
const city = document.getElementById("city")
const zipCode = document.getElementById("zipcode")
const state = document.getElementById("state")
const submitBtn = document.getElementById("submit")

const checkInfo = (e) => {
  if (!checkName(fname)) return error("Please enter a valid first name")
  if (!checkName(lname)) return error("Please enter a valid last name")
  if (!checkEmail()) return error("Please enter a valid email address")
  if (!checkPhoneNumber()) return error("Please enter a valid phone number")
  if (!checkAddress1()) return error("Please enter a valid address")
  if (!checkCity()) return error("Please enter a valid city name")
  if (!checkZip()) return error("Please enter a valid zip code")
  if (!checkState())
    return error("Please choose a state from the dropdown menu")
}

const checkName = (name) => {
  name = name.value.trim()
  if (name === "") return false
  for (i = 0; i < name.length; i++) {
    if (!isNaN(name[i])) return false
    if (
      name[i] == "!" ||
      name[i] == "@" ||
      name[i] == "#" ||
      name[i] == "$" ||
      name[i] == "%" ||
      name[i] == "^" ||
      name[i] == "&" ||
      name[i] == "*" ||
      name[i] == "(" ||
      name[i] == ")" ||
      name[i] == "_" ||
      name[i] == "+" ||
      name[i] == "=" ||
      name[i] == "{" ||
      name[i] == "}" ||
      name[i] == "[" ||
      name[i] == "]" ||
      name[i] == "|" ||
      name[i] == "\\" ||
      name[i] == ":" ||
      name[i] == ";" ||
      name[i] == '"' ||
      name[i] == "'" ||
      name[i] == "<" ||
      name[i] == ">" ||
      name[i] == "," ||
      name[i] == ">" ||
      name[i] == "." ||
      name[i] == "?" ||
      name[i] == "/"
    )
      return false
  }
  return true
}

const checkEmail = () => {
  const em = email.value.trim()
  if (em === "") return false
  if (!em.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) return false
  return true
}

const checkPhoneNumber = () => {
  let ph = phoneNumber.value.trim()
  if (ph === "") return false
  ph = ph
    .replace("(", "")
    .replace(")", "")
    .replaceAll("-", "")
    .replaceAll(" ", "")
  if (ph.length !== 10) return false
  for (i = 0; i < 10; i++) {
    if (isNaN(ph[i])) return false
  }
  return true
}

const checkAddress1 = () => {
  if (address1.value.trim() === "") return false
  return true
}

const checkCity = () => {
  const c = city.value.trim()
  if (c === "") return false
  for (i = 0; i < c.length; i++) {
    if (!isNaN(c[i])) return false
  }
  return true
}

const checkZip = () => {
  let zip = zipCode.value.trim()
  if (zip === "") return false
  if (zip.length !== 5) return false
  for (i = 0; i < 5; i++) {
    if (isNaN(zip[i])) return false
  }
  return true
}

const checkState = () => {
  if (state.value === "") return false
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
