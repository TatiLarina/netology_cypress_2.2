import {id, username, firstName, lastName, email, password, phone, userStatus} from '../fixtures/user.json'

describe('pet store api', () => {
  it('should create user', () => {
    cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus)
    .then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).eq(200);
    })
  });

  it('should update user', () => {
    cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus);
    cy.updateUser(id[1], username, firstName, lastName, email, password, phone, userStatus)
    .then((response) => {
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eql('600');
    })
  });

  it('should delete user', () => {
    cy.createUser(id[0], username, firstName, lastName, email, password, phone, userStatus);
    cy.deleteUser(username)
    .then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.not.eq("500");
    });
  });
})