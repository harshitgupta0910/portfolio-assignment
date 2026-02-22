# Backend — Python Flask + FastAPI AI Chat

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
```

2. Activate the virtual environment:
- Windows: `venv\Scripts\activate`
- Mac/Linux: `source venv/bin/activate`

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Configure environment variables (`.env`):
```
OPENROUTER_API_KEY=your_openrouter_key
MONGODB_URI=your_mongodb_connection_string
```

## Run

```bash
# FastAPI AI Chat server — http://localhost:8000
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Legacy Flask server — http://localhost:5000 (optional)
python app.py
```

## AI Chat Endpoints

| Method | Path        | Description             |
|--------|-------------|-------------------------|
| GET    | /           | Root health check       |
| GET    | /api/health | Health check            |
| POST   | /api/chat   | AI resume chat          |

### POST /api/chat

**Request:**
```json
{ "message": "What tech stack does Harshit use?" }
```
**Response:**
```json
{ "reply": "Harshit uses React, TypeScript, Node.js, MongoDB..." }
```
