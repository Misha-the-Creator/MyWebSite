FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim AS builder
COPY --from=ghcr.io/astral-sh/uv:0.11.16 /uv /uvx /bin/

ENV UV_COMPILE_BYTECODE=1 
ENV UV_LINK_MODE=copy
ENV UV_NO_DEV=1
ENV UV_PYTHON_DOWNLOADS=0

WORKDIR /back
RUN --mount=type=cache,target=/root/.cache/uv \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync --locked --no-install-project
COPY . /back
RUN --mount=type=cache,target=/root/.cache/uv \
    uv sync --locked

FROM python:3.12.3-slim

RUN groupadd --system --gid 999 nonroot \
 && useradd --system --gid 999 --uid 999 --create-home nonroot
COPY --from=builder --chown=nonroot:nonroot /back /back

ENV PATH="/back/.venv/bin:$PATH"
ENV PYTHONUNBUFFERED=1

USER nonroot

WORKDIR /back

CMD ["python", "src/main.py"]