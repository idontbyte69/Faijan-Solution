import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create roles
  const adminRole = await prisma.role.upsert({
    where: { name: 'admin' },
    update: {},
    create: {
      name: 'admin',
      description: 'Administrator with full access',
      permissions: ['create', 'read', 'update', 'delete'],
    },
  });

  const moderatorRole = await prisma.role.upsert({
    where: { name: 'moderator' },
    update: {},
    create: {
      name: 'moderator',
      description: 'Moderator with limited access',
      permissions: ['create', 'read', 'update'],
    },
  });

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.upsert({
    where: { email: 'admin@faijansolution.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@faijansolution.com',
      password: hashedPassword,
      roleId: adminRole.id,
    },
  });

  // Create moderator user
  const moderatorPassword = await bcrypt.hash('moderator123', 10);
  await prisma.user.upsert({
    where: { email: 'moderator@faijansolution.com' },
    update: {},
    create: {
      name: 'Moderator User',
      email: 'moderator@faijansolution.com',
      password: moderatorPassword,
      roleId: moderatorRole.id,
    },
  });

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 