from fastapi import FastAPI

from app.core.config.settings import settings
from app.core.logging.logger import logger
from app.lifespan import lifespan
from app.modules.system.api.router import router as system_router
from app.core.exceptions.handlers import register_exception_handlers
from app.shared.responses import APIResponse
from app.api.v1 import api_router
app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
    debug=settings.debug,
    lifespan=lifespan,
)

register_exception_handlers(app)
app.include_router(api_router)
logger.info("AI Studio Backend Initialised")


@app.get("/")
async def root():

    logger.info("Root endpoint accessed")

    return {
        "application": settings.app_name,
        "version": settings.app_version,
        "environment": settings.environment,
        "status": "running",
    }
@app.get("/", response_model=APIResponse)
async def root():

    return APIResponse(
        success=True,
        message="AI Studio Backend is running.",
        data={
            "application": settings.app_name,
            "version": settings.app_version,
            "environment": settings.environment,
        },
    )
app.include_router(system_router)