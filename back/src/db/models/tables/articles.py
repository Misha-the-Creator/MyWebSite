from db.models.base import Base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import Text, LargeBinary, ForeignKey, Integer


class Articles(Base):
    __tablename__ = 'articles'

    title: Mapped[str] = mapped_column(Text)
    route: Mapped[str] = mapped_column(Text) 
    mdx: Mapped[bytes] = mapped_column(Text, nullable=True)
    
class PreviewImages(Base):
    __tablename__ = 'preview_images'

    image: Mapped[bytes] = mapped_column(LargeBinary, nullable=True)
    article_id: Mapped[int] = mapped_column(ForeignKey('articles.id'))

class ArticleImages(Base):
    __tablename__ = 'article_images'

    height: Mapped[int] = mapped_column(Integer, nullable=True)
    width: Mapped[int] = mapped_column(Integer, nullable=True)
    caption: Mapped[str] = mapped_column(Text, nullable=True)
    article_image: Mapped[bytes] = mapped_column(LargeBinary, nullable=True)
    article_id: Mapped[int] = mapped_column(ForeignKey('articles.id'))