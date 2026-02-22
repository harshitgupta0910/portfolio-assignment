from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.openrouter_service import get_ai_response
from database.mongo import get_database
from datetime import datetime, timezone

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not request.message or not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty.")

    try:
        reply = await get_ai_response(request.message.strip())
    except Exception as e:
        raise HTTPException(
            status_code=502,
            detail=f"AI service error: {str(e)}"
        )

    # Persist conversation to MongoDB (fire-and-forget style)
    try:
        db = get_database()
        if db is not None:
            await db["conversations"].insert_one({
                "user_message": request.message.strip(),
                "ai_reply": reply,
                "timestamp": datetime.now(timezone.utc),
            })
    except Exception:
        # Non-critical — don't fail the response if DB write fails
        pass

    return ChatResponse(reply=reply)
