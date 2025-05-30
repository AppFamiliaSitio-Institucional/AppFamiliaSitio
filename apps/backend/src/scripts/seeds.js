import User from "../models/User.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config({path: '../../.env'});

// =====================================================
// DEFINIÇÃO DE CRIPTOGRAFIA:
var salt = process.env.SALT_BCRYPT;
// ==================================================================

export const UserSeed = async() => {
  try {
    const existingUser = await User.findOne({  email: process.env.MAIL_FIRST_ADMIN });
    if (existingUser) {
      console.log("> USER SEED: Usuário Administrador já existe. Nenhuma ação necessária.");
      return;
    };
  
    const newUser = new User({
      name: 'Sitio Admin',
      email: process.env.MAIL_FIRST_ADMIN,
      password: bcrypt.hashSync(process.env.PASSWORD_FIRST_ADMIN, salt),
      sector: 'System-Administrator',
    });
  
    await newUser.save();
    console.log('> USER SEED: Usuário administrador foi criado com sucesso como Seed!');
  } catch (err) {
    console.error('> USER SEED: Erro ao criar a Seed da conta de Administrador:', err);
  }
};