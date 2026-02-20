FROM python:3.9 as builder

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

RUN bash ./build.sh output

FROM nginx:alpine as runner

COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/output /usr/share/nginx/html
