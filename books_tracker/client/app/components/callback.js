const WorkOS = require('@workos-inc/node');
const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientID = process.env.WORKOS_CLIENT_ID;

module.exports = async (req, res) => {
  const { code } = req.query;

  try {
    const { profile } = await workos.sso.getProfileAndToken({
      code,
      clientID,
    });

    // Use the information in `profile` for further business logic.

    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
