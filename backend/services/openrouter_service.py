import os
import json
import httpx
from dotenv import load_dotenv
from models.resume_model import RESUME_DATA

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = "meta-llama/llama-3-8b-instruct"


def build_system_prompt(resume: dict) -> str:
    resume_text = json.dumps(resume, indent=2)
    return f"""You are an AI assistant for Harshit Gupta's portfolio. Your sole job is to \
answer questions strictly based on the resume data provided below.

Rules:
- ONLY answer based on the information in the resume.
- If the answer is not found in the resume, respond with: \
"This information is not available in the resume."
- Keep answers concise, friendly, and professional.
- Do not hallucinate or make up information.
- Refer to Harshit in third person (e.g., "Harshit has..." or "He worked at...").

Resume Data:
{resume_text}
"""


async def get_ai_response(user_message: str) -> str:
    system_prompt = build_system_prompt(RESUME_DATA)

    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://harshitgupta.dev",
        "X-Title": "Harshit Portfolio Chat",
    }

    payload = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_message},
        ],
        "temperature": 0.3,
        "max_tokens": 512,
    }

    async with httpx.AsyncClient(timeout=30.0) as client:
        response = await client.post(OPENROUTER_URL, headers=headers, json=payload)
        response.raise_for_status()
        data = response.json()
        return data["choices"][0]["message"]["content"]
