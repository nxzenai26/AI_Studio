from fastapi import APIRouter

from app.modules.auth.router import router as auth_router
from app.modules.system.api.router import router as system_router
from app.modules.notebooks.router import (
    router as notebook_router,
)
from app.modules.execution.router import router as execution_router

api_router = APIRouter(
    prefix="/api/v1"
)

api_router.include_router(system_router)
api_router.include_router(auth_router)
api_router.include_router(
    notebook_router,
)
api_router.include_router(execution_router)