"""Add another table for article's images

Revision ID: 2bbf74104b30
Revises: 7c609dee3717
Create Date: 2026-05-30 11:41:09.169357

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision: str = "2bbf74104b30"
down_revision: Union[str, Sequence[str], None] = "7c609dee3717"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""
    op.create_table(
        "article_images",
        sa.Column("article_id", sa.Integer(), nullable=False),
        sa.Column("article_image", sa.LargeBinary(), nullable=True),
        sa.Column("id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(
            ["article_id"],
            ["articles.id"],
        ),
        sa.PrimaryKeyConstraint("id"),
    )


def downgrade() -> None:
    """Downgrade schema."""
    op.drop_table("article_images")
