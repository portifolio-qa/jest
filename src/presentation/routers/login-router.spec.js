class LoginRouter {
  route(httpRequest) {
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
      };
    }
  }
}

describe("Login Router", () => {
  test("Deve retornar 400 se não for informado o e-mail", () => {
    const sut = new LoginRouter();
    const httpRequest = {
      body: {
        password: "qualquer_palavra",
      },
    };
    const httpResponse = sut.route(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
