import clientPromise from "@/lib/mongoDb"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "6984088107-b74m2a42votop2kk4hrhfosri34r10d3.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
})
