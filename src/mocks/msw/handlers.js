import { rest } from "msw";

const baseUrl = `${process.env.REACT_APP_BASE_API_URL}`;

export const handlers = [

  rest.post(
      `https://api-car-rental.binaracademy.org/customer/auth/login`,
      async (req, res, ctx) => {
        const { email } = await req.json();
        
        if (email === "customer@bcr.io") {
          return res(
            ctx.status(201),
            ctx.json({
              email: "customer@bcr.io",
              role: "Customer",
              access_token: "dummy-token"
            })
          );
        }
        
        return res(
          ctx.status(400),
          ctx.json({ code: 400, message: "User Not Found" })
        );
      })
];