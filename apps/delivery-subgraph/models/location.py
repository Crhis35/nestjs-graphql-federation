import strawberry


@strawberry.type
class Position():
    lng: float
    lat: float
