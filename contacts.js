const contactsPath = "";

function listContacts() {
  console.log("listContacts");
  // ...твой код
}

function getContactById(contactId) {
  console.log("getContactById", contactId);
  // ...твой код
}

function removeContact(contactId) {
  console.log("removeContact", contactId);
  // ...твой код
}

function addContact(name, email, phone) {
  console.log("addContact", name, email, phone);
  // ...твой код
}
const contacts = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
module.exports = contacts;
