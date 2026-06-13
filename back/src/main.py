import uvicorn
from db.db_helper import db_helper
from contextlib import asynccontextmanager
from fastapi import FastAPI
from db.config import settings
from api.website import website_router
from fastapi.middleware.cors import CORSMiddleware


@asynccontextmanager
async def lifespan(app: FastAPI):
    # app startup
    yield
    # app shutdown
    print('Шатдаун')
    await db_helper.dispose()


app = FastAPI(lifespan=lifespan)
app.include_router(website_router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://147.45.246.64:3000",
        "https://mzuevv.ru",
        "https://www.mzuevv.ru",
    ])

def main():
    print("Hello from ml-back!")


if __name__ == "__main__":
    uvicorn.run("main:app",
                host=settings.run.host,
                port=settings.run.port,
                reload=settings.run.reload)
