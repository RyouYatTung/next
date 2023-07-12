import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

console.log({ clientId: process.env.GOOGLE_ID, clientSecret: process.GOOGLE_CLIENT_DECRET });

const hander = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.GOOGLE_CLIENT_DECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
    } catch (error) {}
  },
});

// export { handler as GET, handler as POST };
