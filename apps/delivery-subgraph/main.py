from typing import List
import strawberry
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from strawberry.asgi import GraphQL
from models.delivery import Delivery, deliveries

from models.track import Track, TrackStatus, TrackType

tracks = [
    {"id": "1",
     "type": TrackType.TRUCK,
     "status": TrackStatus.AVAILABLE,
     "maxWeight": 5000, },
    {"id": "2",
     "type": TrackType.CAR,
     "status": TrackStatus.IN_USE,
     "maxWeight": 5000, },
    {"id": "3",
     "type": TrackType.TRUCK,
     "status": TrackStatus.AVAILABLE,
     "maxWeight": 5000, },
]


@strawberry.type
class Query:
    @strawberry.field
    def list_tracks(self,) -> List[Track]:
        return [Track(id=track['id'], maxWeight=track['maxWeight'], status=track['status'], type=track['type']) for track in tracks]

    @strawberry.field
    def list_deliveries(self,) -> List[Delivery]:
        return [Delivery(id=delivery['id'], internal=delivery['internal'], position=delivery['position'], status=delivery['status'],order=delivery['order'])for delivery in deliveries]


schema = strawberry.federation.Schema(
    query=Query, types=[Delivery], enable_federation_2=True)

graphql_app = GraphQL(schema)

app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_route("/graphql", graphql_app)
