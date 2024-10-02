# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create my_network

# Build dev
docker compose -f docker-compose.yml build

# Up dev
docker compose -f docker-compose.yml up

TODO:
    разобраться с докеригнор и как он влияет на volumes docker compose
    попробовать устанавливать npm пакеты из контейнера (возможно прописать нормальную оболочку для командной строки например zsh)
    посмотреть и поиграться с тестами
    попробовать ci cd для деплоя на тестовую площадку(локально площадка для разработки и на сервере тестовая)