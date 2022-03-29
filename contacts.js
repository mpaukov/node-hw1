const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "/db/contacts.json");

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
}

async function getContactById(contactId) {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const contact = contacts.find(({ id }) => id === contactId);
  return contact;
}

async function removeContact(contactId) {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const newContacts = JSON.stringify(
    contacts.filter(({ id }) => id !== contactId)
  );
  await fs.writeFile(contactsPath, newContacts);
}

async function addContact(name, email, phone) {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const id = require("nanoid").nanoid();
  const newContacts = JSON.stringify([...contacts, { id, name, email, phone }]);
  await fs.writeFile(contactsPath, newContacts);
}
const contactsOperations = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
module.exports = contactsOperations;
