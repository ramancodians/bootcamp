import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import prisma from "../prisma"
import auth from "../middleware/auth"

const UserRoutes = express.Router()

UserRoutes.post("/signup", async (req, res) => {
  try {
    // Check if the user exits
    const existingUser = await prisma.users.count({
      where: {
        phone: req.body.phone
      }
    })

    if (existingUser !== 0) {
      return res.status(400).json({
        success: false,
        error: "User already exists"
      })
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12)
    const user = await prisma.users.create({
      data: {
        ...req.body,
        password: hashedPassword
      },
    })
    return res.json({
      success: true,
      data: user,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error
    })
  }
 
})

UserRoutes.post("/signin", async (req, res) => {
  const allUsers = await prisma.users.findMany()
  const { phone, password } = req.body
  if (!phone || !password) {
    return res.status(400).json({
      success: false,
      error: "Please enter all the values"
    })
  }
  const user = await prisma.users.findFirst({
    where: {
      phone,
    }
  })
  if (!user) {
    return res.status(400).json({
      success: false,
      error: `No user found with ${phone} phone number`
    })
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (isPasswordCorrect) {
    // all good, sign this user in
    const token = jwt.sign({ phone, id: user.id }, process.env.SECRET || "")
    return res.json({
      success: true,
      token,
    })
  } else {
    return res.status(401).json({
      success: false,
      error: "Phone or Passwork didn't match",
    })
  }
})

UserRoutes.get("/profile/:userId", auth, async (req, res) => {
  try {
    const { userId } = req.params
    const record = await prisma.users.findFirst({
      where: {
        id: Number(userId),
      },
      select: {
        first_name: true,
        last_name: true,
        id: true,
        image_url: true,
        phone: true,
        role: true,
      }
    })
    return res.json({
      success: true,
      data: record,
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error,
    })
  }
})

UserRoutes.get("/list", auth, async (req, res) => {
  try {
    const allUsers = await prisma.users.findMany()
    return res.json({
      success: true,
      data: allUsers,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Something went wrong!",
    })
  }
})

export default UserRoutes
