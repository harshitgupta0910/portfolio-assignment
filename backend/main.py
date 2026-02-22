from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from dotenv import load_dotenv

from database.mongo import connect_to_mongo, close_mongo_connection
from routes.chat import router as chat_router

load_dotenv()


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    await connect_to_mongo()
    yield
    # Shutdown
    await close_mongo_connection()


app = FastAPI(
    title="Harshit Portfolio API",
    description="AI-powered resume chat backend for Harshit Gupta's portfolio.",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS — allow frontend dev server and production domain
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",     # Vite dev server
        "http://localhost:3000",
        "https://harshitgupta.dev",  # Production domain (update as needed)
        "*",                         # Remove in strict production
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(chat_router, prefix="/api")


@app.get("/")
async def root():
    return {"message": "Harshit Portfolio API is running 🚀"}


@app.get("/api/health")
async def health():
    return {"status": "healthy"}
