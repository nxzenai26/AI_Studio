from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.core.database.mongodb import MongoDB
from app.core.logging.logger import logger


@asynccontextmanager
async def lifespan(app: FastAPI):

    logger.info("Starting AI Studio")

    await MongoDB.connect()

    yield

    await MongoDB.disconnect()

    logger.info("AI Studio Shutdown Complete")