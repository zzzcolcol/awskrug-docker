
FROM node:carbon

# 앱 디렉터리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
COPY ./node/package*.json ./
RUN npm install

# 앱 소스 추가
COPY ./node/*.js ./

EXPOSE 8000
CMD [ "npm", "start" ]

