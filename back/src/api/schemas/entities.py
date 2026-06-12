from pydantic import BaseModel
from typing import List

class ArticleBase(BaseModel):
    title: str
    route: str
    mdx: str

class PreviewImagesBase(BaseModel):
    article_id: int | None = None
    image_arr: List[bytes]

class ArticleImageBase(BaseModel):
    article_id: int
    article_image: bytes
    width: int
    height: int
    caption: str