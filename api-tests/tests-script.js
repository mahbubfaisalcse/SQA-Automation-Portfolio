let response = pm.response.json();
response.forEach(item => {
  pm.test("ID exists", () => {
    pm.expect(item.id).to.exist;
  });
});
