import strawberry
from enum import Enum


@strawberry.enum
class TrackStatus(Enum):
    IN_USE = "IN_USE"
    AVAILABLE = "AVAILABLE"
    MAINTENANCE = "MAINTENANCE"


@strawberry.enum
class TrackType(Enum):
    CAR = "CAR"
    TRUCK = "TRUCK"
    MOTORCYCLE = "MOTORCYCLE"
    BICYCLE = "BICYCLE"
    AIRPLANE = "AIRPLANE"


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
class Track:
    id: strawberry.ID
    status: TrackStatus
    maxWeight: float
    type: TrackType

    @classmethod
    def resolve_reference(cls, id: strawberry.ID):
        for track in tracks:
            if track.id == id:
                return Track(id=id, maxWeight=track['maxWeight'], type=track["type"], status=track['status'])
        return None
