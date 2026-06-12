import base64
from fastapi import (APIRouter,  
                     UploadFile, 
                     Depends,
                     Form)
from sqlalchemy.ext.asyncio import AsyncSession
from db.db_helper import db_helper
from db.db_manager import DBManager
from api.schemas.entities import ArticleBase, PreviewImagesBase, ArticleImageBase

website_router = APIRouter(prefix='/ml',
                           tags=['website'])

@website_router.post('/post-article')
async def post_article(
    img1: UploadFile,
    img2: UploadFile,
    mdx: str = Form(),
    title: str = Form(),
    route: str = Form(),
    session: AsyncSession = Depends(db_helper.session_getter),
) -> dict:
    
    dbmanager = DBManager(session=session)
    article = ArticleBase(title=title, route=route, mdx=mdx)
    image = PreviewImagesBase(image_arr=[await img1.read(), await img2.read()])
    result = await dbmanager.post_article_to_db(article, image)

    return {'status': result}

@website_router.get('/get-article/{title}')
async def get_article(title: str, 
                      session: AsyncSession = Depends(db_helper.session_getter)) -> dict:
    dbmanager = DBManager(session=session)
    result = await dbmanager.get_article_txt_from_db(title)

    return {'text': result}

@website_router.post('/push-article-image')
async def push_article_image(article_id: int,
                      width: int,
                      height: int,
                      caption: str,
                      img: UploadFile, 
                      session: AsyncSession = Depends(db_helper.session_getter)) -> dict:
    dbmanager = DBManager(session=session)

    image = ArticleImageBase(article_id=article_id, 
                             width=width,
                             height=height,
                             caption=caption,
                             article_image=await img.read())

    result = await dbmanager.post_image_article(image)

    return {'text': result}

@website_router.get('/get-article-image/{title}')
async def get_article_image(title: str,
                      session: AsyncSession = Depends(db_helper.session_getter)) -> dict:
    dbmanager = DBManager(session=session)
    article_image_row = await dbmanager.get_image_article(title)
    
    arr_of_img = []

    for image in article_image_row:
        img_bytes = base64.b64encode(image.article_image).decode("utf-8")
        img_dict = {'caption': image.caption,
                    'width': image.width,
                    'height': image.height,
                    'image': img_bytes}
        arr_of_img.append(img_dict)

    return {'result': arr_of_img}