module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '5713934e1290ba0cf5d9bb8201092d1b'),
    },
  },

  vercel: {
      token: env('xEYBY4uVbkiQZMTAnR3bFzrg'),
      teamId: env('kellysciandra'),
      projectId: env('final-inventory-app'),
      triggers: {
          production: env('prj_966r1X3LOFztPWtYhY6j2tfhAZ4n/Sy0KoEOZBM')
      }
  }
});
