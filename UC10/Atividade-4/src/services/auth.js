const users = [
  { email: "admin@email.com", password: "admin123" },
  { email: "user@email.com", password: "senha456" }
];

function validateEmail(email) {
  if (!email || email === "") return false;
  if (!email.includes("@")) return false;
  
  const parts = email.split("@");
  if (parts.length !== 2 || parts[1] === "" || parts[0] === "") {
    return false;
  }
  
  return true;
}

function login(email, password) {
  if (!validateEmail(email)) {
    return { success: false, message: "E-mail inválido" };
  }
  
  const user = users.find(u => u.email === email);
  
  if (!user || user.password !== password) {
    return { success: false, message: "Credenciais inválidas" };
  }
  
  return { success: true, token: `token-simulado-${Date.now()}` };
}

module.exports = {
  validateEmail,
  login
};
