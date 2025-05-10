# information_literacy_app


### Docker 関連
```bash
# コンテナ起動
docker compose build
docker compose up -d

#コンテナ停止
docker compose down

# phpコンテナログイン
docker compose exec api bash

# DBログイン
docker compose exec db bash
mysql -u root -p
パスワード入力：root
```