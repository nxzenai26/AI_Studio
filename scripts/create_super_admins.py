from motor.motor_asyncio import AsyncIOMotorClient
import asyncio

from app.core.security.password import hash_password

MONGO_URI = "MONGODB_URI= MONGO_URI=mongodb+srv://nxzenai_admin:nxzenai@cluster0.p6h7hjw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
DATABASE_NAME = "users"

SUPER_ADMINS = [
    {
        "email": "bhargav@nxzenai.com",
        "username": "bhargav",
        "full_name": "Madhiraju Bharghav",
    },
    {
        "email": "fayaz@nxzenai.com",
        "username": "fayaz",
        "full_name": "Fayaz",
    },
    {
        "email": "roushan@nxzenai.com",
        "username": "roushan",
        "full_name": "Roushan",
    },
    {
        "email": "shruthi.n@nxzenai.com",
        "username": "shruthi",
        "full_name": "Shruthi N",
    },
]

PASSWORD = "NxZen@123"


async def main():
    client = AsyncIOMotorClient(MONGO_URI)
    db = client[DATABASE_NAME]

    for admin in SUPER_ADMINS:

        existing = await db.users.find_one(
            {"email": admin["email"]}
        )

        document = {
            "email": admin["email"],
            "username": admin["username"],
            "full_name": admin["full_name"],
            "hashed_password": hash_password(PASSWORD),
            "role": "super_admin",
            "is_active": True,
            "is_verified": True,
        }

        if existing:
            await db.users.update_one(
                {"email": admin["email"]},
                {"$set": document},
            )
            print(f"Updated {admin['email']}")
        else:
            await db.users.insert_one(document)
            print(f"Created {admin['email']}")

    client.close()


asyncio.run(main())