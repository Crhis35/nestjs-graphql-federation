from enum import Enum
from typing import Optional

import strawberry

from models.track import Track, tracks
from models.location import Position


@strawberry.enum
class DeliveryStatus(Enum):
    DELIVERY = "DELIVERY"
    CANCELLED = "CANCELLED"
    REJECTED = "REJECTED"
    TRANSIT = "TRANSIT"
    PICKUP_AVAILABLE = "PICKUP_AVAILABLE"
    DELAYED = "DELAYED"
    DRAFTED = "DRAFTED"


@strawberry.federation.type(extend=True, keys=["id"])
class Internal:
    id: strawberry.ID = strawberry.federation.field(external=True)

@strawberry.federation.type(extend=True, keys=["id"])
class Order:
    id: strawberry.ID = strawberry.federation.field(external=True)



deliveries = [
    {
        "id": "1",
        "status": DeliveryStatus.TRANSIT,
        "position": Position(lng=5, lat=4),
        "internal": Internal(id="1"),
         "order": Order(id="1"),
    },
    {
        "id": "2",
        "status": DeliveryStatus.TRANSIT,
        "position": Position(lng=5, lat=4),
        "internal": Internal(id="2"),
        "order": Order(id="2"),

    },
    {
        "id": "3",
        "status": DeliveryStatus.TRANSIT,
        "position": Position(lng=5, lat=4),
        "internal": Internal(id="3"),
         "order": Order(id="3"),
    },

]


def get_track(root: 'Delivery') -> Optional[Track]:
    for idx, track in enumerate(tracks):
        if root.id == str(idx):
            return Track(id=root.id, max_weight=track['maxWeight'], type=track["type"], status=track['status'])
    return None


@strawberry.type
class Delivery:
    id: strawberry.ID
    status: DeliveryStatus
    track: Optional[Track] = strawberry.field(resolver=get_track)
    position: Position
    internal: Internal
    order: Order

    @classmethod
    def resolve_reference(cls, id: strawberry.ID):
        for delivery in deliveries:
            if delivery.id == id:
                return Delivery(id=id, internal=delivery['internal'], position=delivery['position'], status=delivery['status'], order=delivery['order'])
        return None
