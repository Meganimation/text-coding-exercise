var faker = require("faker");

function generateOwners() {
  var users = [];
  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();
    users.push({
      id: id,
      first_name: firstName,
      last_name: lastName,
      email: email,
    });
  }
  return users;
}

function generateConversationMetadata(users) {
  var cmds = [];
  users.forEach(function (user) {
    cmds.push({
      ownerId: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      lastMessage: faker.lorem.sentence(),
      lastMessageDateTime: faker.date.past(),
    });
  });
  return cmds;
}

function generateMessages(users) {
  var messages = [];
  var random_boolean = Math.random() < 0.5;

  users.forEach(function (user) {
    for (var i = 0; i < 200; i++) {
      var sentFrom = "revvup";
      if (random_boolean) {
        sentFrom = "customer";
      }
      messages.push({
        ownerId: user.id,
        id: Math.floor(Math.random() * 10000),
        text: faker.lorem.sentence(),
        sentFrom: sentFrom,
        messageDateTime: faker.date.past(),
      });
    }
  });
  return messages;
}

function generateData() {
  let owners = generateOwners();
  let messages = generateMessages(owners);
  let convomds = generateConversationMetadata(owners);
  return {
    owners: owners,
    conversationMetadata: convomds,
    messages: messages,
  };
}
module.exports = generateData;
