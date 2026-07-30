from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase

from app.core.config.settings import settings
from app.core.logging.logger import logger


class MongoDB:

    client: AsyncIOMotorClient | None = None
    database: AsyncIOMotorDatabase | None = None

    @classmethod
    async def connect(cls):

        logger.info("Connecting to MongoDB...")

        cls.client = AsyncIOMotorClient(
            settings.mongodb_uri,
            maxPoolSize=100,
            minPoolSize=5,
            serverSelectionTimeoutMS=5000,
        )

        await cls.client.admin.command("ping")

        cls.database = cls.client[settings.database_name]

        logger.success("MongoDB Connected Successfully")

    @classmethod
    async def disconnect(cls):

        if cls.client:

            logger.warning("Closing MongoDB Connection")

            cls.client.close()

            logger.success("MongoDB Connection Closed")


def get_database() -> AsyncIOMotorDatabase:

    if MongoDB.database is None:
        raise RuntimeError("MongoDB is not connected.")

    return MongoDB.database