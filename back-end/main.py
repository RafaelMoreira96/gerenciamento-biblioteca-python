import config.routers as fastapi

app = fastapi.Routers()
app.crud_routers()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app.app, host="127.0.0.1", port=8000)